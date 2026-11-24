# sws-astro

## Requirements

- Node.js >= 24.0.0

## Getting started

```bash
nvm use
npm ci
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site |
| `npm run check` | Run Astro's type/diagnostic checker |
| `npm run lint` | Lint the codebase with ESLint |
| `npm run lint:fix` | Lint and auto-fix issues |

Run `npm run lint` and `npm run check` before considering any change done — they're the only verification gates in this repo.

## Consultation form (`/consultation/`)

`/consultation/` is an unlisted landing page: it isn't in the site navigation or the sitemap, and it's marked `noindex`. Its form posts to a Netlify function ([`netlify/functions/consultation.mts`](netlify/functions/consultation.mts)) that does two things with each request:

1. **Saves it to HubSpot**: it creates the requester's contact (or updates it, matched by email) and a deal titled "[UXR] Consultation request: …" in the consultation pipeline (pipeline `1572379368`, stage `2515363565`), linked to that contact.
2. **Posts it to the #newclients Slack channel** with the title **"[UXR] New consultation request"**. If the HubSpot save failed, the Slack message says so, so someone can add it by hand.

The visitor sees the success message if either step worked, so they aren't asked to resubmit and create a duplicate. They see the error message only if both failed.

### Environment variables

| Variable | What it is | Secret? |
| --- | --- | --- |
| `SLACK_NEWCLIENTS_WEBHOOK_URL` | Slack incoming webhook for #newclients | **Yes** |
| `HUBSPOT_ACCESS_TOKEN` | HubSpot service key | **Yes** |

The pipeline and stage IDs aren't secret, so they're set in `HUBSPOT` at the top of `netlify/functions/consultation.mts`.

### 1. Create the Slack webhook (Slack workspace admin)

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and click **Create New App** → **From scratch**. Name it something like "SWS website" and pick the workspace that has #newclients.
2. In the app's settings, open **Incoming Webhooks** and turn **Activate Incoming Webhooks** on.
3. Click **Add New Webhook to Workspace**, choose **#newclients**, and click **Allow**. If your workspace requires approval for new apps, a workspace admin has to approve it first.
4. Copy the webhook URL (it starts with `https://hooks.slack.com/services/`).

Treat the webhook URL like a password: anyone who has it can post to the channel. Don't commit it to the repo or paste it into a public channel. If it leaks, delete the webhook in the app's **Incoming Webhooks** page and create a new one.

If #newclients already gets messages from an existing app, such as the Google Form integration, you can add a webhook to that app instead of creating a new one.

### 2. Create the HubSpot service key (HubSpot super admin)

1. In HubSpot, go to **Development** → **Keys** → **Service keys** and create a key just for this form, named something like "SWS website consultation form". Don't reuse a key that another integration depends on: rotating it to fix a leak would break that integration too.
2. Give it these scopes:
   - `crm.objects.contacts.read` and `crm.objects.contacts.write`
   - `crm.objects.deals.read` and `crm.objects.deals.write`
3. Create the key and copy it. It goes in `HUBSPOT_ACCESS_TOKEN`. (A legacy private app access token also works.)

Treat the key like a password, the same way as the Slack webhook. If it leaks, rotate it on the key's page in HubSpot.

**If the pipeline is a tickets pipeline, not deals:** change `recordType` to `'tickets'` in `HUBSPOT` in `netlify/functions/consultation.mts`, and use the `tickets` scope instead of the deals scopes.

### 3. Add the variables to Netlify (Netlify site admin)

1. In the Netlify UI, open this site and go to **Site configuration** → **Environment variables**.
2. Add both variables above:
   - **Scopes:** at least **Functions**
   - **Deploy contexts:** **Production**. Add **Deploy previews** too if you want to test on PR previews, but those test submissions go to the real #newclients channel and HubSpot.
   - Mark both as **secrets** if Netlify offers the option.
3. Redeploy the site (**Deploys** → **Trigger deploy** → **Deploy site**) so the function picks up the variables.

### Test it locally

`npm run dev` doesn't run Netlify functions, so submissions always fail there. To test the full flow on your laptop, use the Netlify CLI, which runs Astro and the function together:

1. Create a file named `.env` in the project root (it's already in `.gitignore`, so it won't be committed):

   ```ini
   SLACK_NEWCLIENTS_WEBHOOK_URL=https://hooks.slack.com/services/...
   HUBSPOT_ACCESS_TOKEN=...
   ```

   Test submissions post to the real #newclients channel and create real HubSpot contacts and deals. Let the channel know you're testing, and delete the test contact and deal in HubSpot afterward.
2. Start the local server:

   ```bash
   npx netlify-cli@27.16.1 dev --offline
   ```

   `--offline` keeps it from asking you to log in to Netlify or link the site. It reads the variables from `.env`.
3. Open **http://localhost:8888/consultation/** (port 8888, not 4321) and submit a test request.
4. The function's logs, including any HubSpot or Slack errors, appear in the terminal where you ran the command.

### Test it on the deployed site

1. Open `/consultation/` on the deployed site (or a deploy preview, if you added that context) and submit a test request.
2. You should see "Thank you! Your request has been sent." on the page, a "[UXR] New consultation request" message in #newclients, and a new "[UXR] Consultation request" deal in stage `2515363565` of the consultation pipeline in HubSpot.
3. If something is missing, open **Logs** → **Functions** → **consultation** in Netlify:
   - `... is not set`: the variable is missing, scoped to the wrong context, or the site hasn't been redeployed since you added it.
   - `Slack responded with 403` or `404`: the webhook was revoked or the URL was copied incorrectly. Create a new webhook.
   - `HubSpot responded with 401`: the key is wrong, or was rotated and `.env` or Netlify still has the old one.
   - `HubSpot responded with 403`: the service key is missing a scope from step 2.
   - `HubSpot responded with 400`: HubSpot's error message follows. It usually means the pipeline or stage ID is wrong, or the pipeline is a tickets pipeline (see step 2).

## Contributing

1. Branch off of `main`: `git checkout -b your-branch-name main`
2. Make your changes and verify with `npm run lint` and `npm run check`
3. Push your branch and open a pull request on GitHub against `main`
4. Once approved by another developer, merge the PR into `main`

Merging into `main` triggers Netlify to rebuild and deploy the production site automatically — no manual deploy step is needed.
