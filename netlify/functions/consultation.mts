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

type FieldName = keyof typeof FIELDS;
type Values = Record<FieldName, string>;

// Slack mrkdwn only needs these three characters escaped.
const escapeSlack = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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

  // Create the contact, or update it if one with this email already exists.
  const contact = await callHubSpot('/crm/v3/objects/contacts/batch/upsert', token, {
    inputs: [{
      idProperty: 'email',
      id: values.email,
      properties: {
        email: values.email,
        firstname: values.firstName,
        lastname: values.lastName,
        company: values.organization,
        ...(values.website && { website: values.website }),
      },
    }],
  });
  const contactId = contact?.results?.[0]?.id;
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
    .map((key) => `*${FIELDS[key].label}:*\n${escapeSlack(values[key])}`);

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
  // Native (no-JS) form posts get sent back to the page with a status flag.
  const respond = (ok: boolean, status: number) => (wantsJson
    ? Response.json({ ok }, { status })
    : Response.redirect(new URL(`${PAGE_PATH}?${ok ? 'submitted' : 'error'}=1`, req.url), 303));

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
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
    const value = String(data.get(name) ?? '').trim();
    if ((field.required && !value) || value.length > field.max) {
      return respond(false, 400);
    }
    values[name] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
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
};
