/**
 * Receives consultation requests from /consultation/ and posts them to the
 * #newclients Slack channel, tagged UXR so they're distinguishable from
 * requests that come in through the Google Form.
 *
 * Requires a Slack incoming webhook URL for #newclients, set as the
 * SLACK_NEWCLIENTS_WEBHOOK_URL environment variable in the Netlify UI.
 */

const TAG = 'UXR';
const PAGE_PATH = '/consultation/';

const FIELDS = {
  email: { label: 'Email', required: true, max: 254 },
  firstName: { label: 'First name', required: true, max: 100 },
  lastName: { label: 'Last name', required: true, max: 100 },
  organization: { label: 'Primary organization', required: true, max: 200 },
  website: { label: 'Website', required: false, max: 500 },
  details: { label: 'Tell us more', required: false, max: 5000 },
} as const;

type FieldName = keyof typeof FIELDS;

// Slack mrkdwn only needs these three characters escaped.
const escapeSlack = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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

  const values = {} as Record<FieldName, string>;
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

  const webhookUrl = process.env.SLACK_NEWCLIENTS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('SLACK_NEWCLIENTS_WEBHOOK_URL is not set');
    return respond(false, 500);
  }

  const name = escapeSlack(`${values.firstName} ${values.lastName}`);
  const lines = (Object.keys(FIELDS) as FieldName[])
    .filter((key) => values[key])
    .map((key) => `*${FIELDS[key].label}:*\n${escapeSlack(values[key])}`);

  const slackResponse = await fetch(webhookUrl, {
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
      ],
    }),
  }).catch((error: unknown) => {
    console.error('Slack request failed', error);
    return null;
  });

  if (!slackResponse?.ok) {
    console.error('Slack responded with', slackResponse?.status);
    return respond(false, 502);
  }

  return respond(true, 200);
};

export const config = {
  path: '/api/consultation',
};
