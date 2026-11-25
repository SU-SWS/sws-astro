/**
 * Receives consultation requests from /consultation/, saves each one to
 * HubSpot (a contact plus a record in the consultation pipeline), and posts it
 * to the #newclients Slack channel tagged UXR so it's distinguishable from
 * requests that come in through the Google Form.
 *
 * Environment variables (Netlify UI, or a local .env for `netlify dev`):
 * - SLACK_NEWCLIENTS_WEBHOOK_URL: Slack incoming webhook for #newclients (secret)
 * - HUBSPOT_ACCESS_TOKEN: HubSpot service key (secret)
 *
 * See the "Consultation form" section of the README for setup.
 */

const TAG = 'UXR';
const PAGE_PATH = '/consultation/';

// The HubSpot pipeline and stage new requests land in.
const HUBSPOT = {
  recordType: 'deals' as 'deals' | 'tickets',
  pipelineId: '1572379368',
  stageId: '2515363565',
};

// Property names differ between deals and tickets. `contactAssociation` is
// HubSpot's built-in association type ID for linking the record to a contact.
const RECORD_PROPERTIES = {
  deals: { name: 'dealname', body: 'description', pipeline: 'pipeline', stage: 'dealstage', contactAssociation: 3 },
  tickets: { name: 'subject', body: 'content', pipeline: 'hs_pipeline', stage: 'hs_pipeline_stage', contactAssociation: 16 },
};

const FIELDS = {
  email: { label: 'Email', required: true, max: 254 },
  firstName: { label: 'First name', required: true, max: 100 },
  lastName: { label: 'Last name', required: true, max: 100 },
  organization: { label: 'Primary organization', required: true, max: 200 },
  website: { label: 'Website', required: false, max: 500 },
  details: { label: 'Tell us more', required: false, max: 5000 },
} as const;

// Kept in sync with the email input's `pattern` in ConsultationForm.tsx.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = keyof typeof FIELDS;
type Values = Record<FieldName, string>;

// Slack mrkdwn only needs these three characters escaped.
const escapeSlack = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Slack rejects the whole message if a section's text is over 3,000
// characters, and "Tell us more" can be 5,000 before escaping. Split the
// labeled, escaped field into as many sections as it needs, one character at a
// time so an escape like `&amp;` is never cut in half.
const SLACK_SECTION_MAX = 3000;
function slackSections(label: string, value: string): string[] {
  const sections = [`*${label}:*\n`];
  for (const char of value) {
    const escaped = escapeSlack(char);
    if (sections[sections.length - 1].length + escaped.length > SLACK_SECTION_MAX) {
      sections.push('');
    }
    sections[sections.length - 1] += escaped;
  }
  return sections;
}

async function callHubSpot(path: string, token: string, body: unknown): Promise<{ id?: string; results?: { id: string }[] } | null> {
  const response = await fetch(`https://api.hubapi.com${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  }).catch((error: unknown) => {
    console.error('HubSpot request failed', path, error);
    return null;
  });

  if (!response?.ok) {
    console.error('HubSpot responded with', response?.status, path, await response?.text().catch(() => ''));
    return null;
  }
  return response.json();
}

async function saveToHubSpot(values: Values): Promise<boolean> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.error('HUBSPOT_ACCESS_TOKEN is not set');
    return false;
  }

  // Anyone can type any email into the form, so an existing contact is linked
  // to the new record but never updated. What was submitted is still in the
  // record's description and the Slack message.
  const findContact = async () => (await callHubSpot('/crm/v3/objects/contacts/batch/read', token, {
    idProperty: 'email',
    inputs: [{ id: values.email }],
    properties: ['email'],
  }))?.results?.[0]?.id;

  const contactId = await findContact()
    ?? (await callHubSpot('/crm/v3/objects/contacts', token, {
      properties: {
        email: values.email,
        firstname: values.firstName,
        lastname: values.lastName,
        company: values.organization,
        ...(values.website && { website: values.website }),
      },
    }))?.id
    // The create fails if the same email was added in the meantime (e.g. a
    // double submit), so look it up once more.
    ?? await findContact();
  if (!contactId) {
    return false;
  }

  const props = RECORD_PROPERTIES[HUBSPOT.recordType];
  const body = (Object.keys(FIELDS) as FieldName[])
    .filter((key) => values[key])
    .map((key) => `${FIELDS[key].label}: ${values[key]}`)
    .join('\n');

  const record = await callHubSpot(`/crm/v3/objects/${HUBSPOT.recordType}`, token, {
    properties: {
      [props.name]: `[${TAG}] Consultation request: ${values.firstName} ${values.lastName} (${values.organization})`,
      [props.body]: body,
      [props.pipeline]: HUBSPOT.pipelineId,
      [props.stage]: HUBSPOT.stageId,
    },
    associations: [{
      to: { id: contactId },
      types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: props.contactAssociation }],
    }],
  });
  return Boolean(record?.id);
}

async function postToSlack(values: Values, savedToHubSpot: boolean): Promise<boolean> {
  const webhookUrl = process.env.SLACK_NEWCLIENTS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('SLACK_NEWCLIENTS_WEBHOOK_URL is not set');
    return false;
  }

  const name = escapeSlack(`${values.firstName} ${values.lastName}`);
  const lines = (Object.keys(FIELDS) as FieldName[])
    .filter((key) => values[key])
    .flatMap((key) => slackSections(FIELDS[key].label, values[key]));

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // Fallback text for notifications.
      text: `[${TAG}] New consultation request from ${name}`,
      blocks: [
        {
          type: 'header',
          text: { type: 'plain_text', text: `[${TAG}] New consultation request`, emoji: false },
        },
        ...lines.map((line) => ({ type: 'section', text: { type: 'mrkdwn', text: line } })),
        ...(savedToHubSpot ? [] : [{
          type: 'context',
          elements: [{ type: 'mrkdwn', text: ':warning: This request could not be saved to HubSpot. Add it manually.' }],
        }]),
      ],
    }),
  }).catch((error: unknown) => {
    console.error('Slack request failed', error);
    return null;
  });

  if (!response?.ok) {
    console.error('Slack responded with', response?.status);
    return false;
  }
  return true;
}

export default async (req: Request) => {
  const wantsJson = req.headers.get('accept')?.includes('application/json') ?? false;
  // Native form posts get sent back to the page. The query flag is for when
  // JS loads on the returned page; the fragment shows the result without JS
  // (see the <noscript> messages in Intro.astro).
  const respond = (ok: boolean, status: number) => (wantsJson
    ? Response.json({ ok }, { status })
    : Response.redirect(new URL(
      ok ? `${PAGE_PATH}?submitted=1#request-sent` : `${PAGE_PATH}?error=1#request-failed`,
      req.url,
    ), 303));

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
  }

  // Browsers send Origin on every POST, so this stops other websites from
  // submitting the form in the background. Requests without one aren't from a
  // browser page and can't be told apart this way, so they're let through.
  const origin = req.headers.get('origin');
  if (origin && origin !== new URL(req.url).origin) {
    return new Response('Forbidden', { status: 403 });
  }

  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return respond(false, 400);
  }

  // Honeypot filled in: pretend it worked so bots don't retry.
  if (String(data.get('company') ?? '').trim()) {
    return respond(true, 200);
  }

  const values = {} as Values;
  for (const [name, field] of Object.entries(FIELDS) as [FieldName, (typeof FIELDS)[FieldName]][]) {
    // Browsers send textarea line breaks as \r\n but count them as one
    // character toward maxlength, so normalize before checking the length.
    const value = String(data.get(name) ?? '').replace(/\r\n/g, '\n').trim();
    if ((field.required && !value) || value.length > field.max) {
      return respond(false, 400);
    }
    values[name] = value;
  }
  if (!EMAIL_PATTERN.test(values.email)) {
    return respond(false, 400);
  }

  // Save first so the Slack message can flag a failed save.
  const savedToHubSpot = await saveToHubSpot(values);
  const postedToSlack = await postToSlack(values, savedToHubSpot);

  // Either one reaching the team counts as received, so the visitor isn't asked
  // to resubmit (and create a duplicate) when only one of them failed.
  return savedToHubSpot || postedToSlack ? respond(true, 200) : respond(false, 502);
};

export const config = {
  path: '/api/consultation',
  // Far more than a person needs, but stops a script from flooding HubSpot and
  // Slack. Over the limit, Netlify returns 429 without running the function.
  // Rules that don't validate don't fail the deploy, so check the deploy log.
  rateLimit: {
    windowLimit: 5,
    windowSize: 60,
    aggregateBy: ['ip', 'domain'],
  },
};
