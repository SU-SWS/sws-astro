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

`/consultation/` is an unlisted landing page: it isn't in the site navigation or the sitemap, and it's marked `noindex`. Its form posts to a Netlify function ([`netlify/functions/consultation.mts`](netlify/functions/consultation.mts)), which sends each request to the **#newclients** Slack channel with the title **"[UXR] New consultation request"**.

The function needs a Slack incoming webhook. Until one is set, every submission shows the error message.

### 1. Create the webhook (Slack workspace admin)

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and click **Create New App** → **From scratch**. Name it something like "SWS website" and pick the workspace that has #newclients.
2. In the app's settings, open **Incoming Webhooks** and turn **Activate Incoming Webhooks** on.
3. Click **Add New Webhook to Workspace**, choose **#newclients**, and click **Allow**. If your workspace requires approval for new apps, a workspace admin has to approve it first.
4. Copy the webhook URL (it starts with `https://hooks.slack.com/services/`).

Treat the webhook URL like a password: anyone who has it can post to the channel. Don't commit it to the repo or paste it into a public channel. If it leaks, delete the webhook in the app's **Incoming Webhooks** page and create a new one.

If #newclients already gets messages from an existing app, such as the Google Form integration, you can add a webhook to that app instead of creating a new one.

### 2. Add it to Netlify (Netlify site admin)

1. In the Netlify UI, open this site and go to **Site configuration** → **Environment variables**.
2. Click **Add a variable**:
   - **Key:** `SLACK_NEWCLIENTS_WEBHOOK_URL`
   - **Value:** the webhook URL from step 1
   - **Scopes:** at least **Functions**
   - **Deploy contexts:** **Production**. Add **Deploy previews** too if you want to test on PR previews, but those test submissions will post to the real #newclients channel.
   - Mark it as a **secret** if Netlify offers the option.
3. Redeploy the site (**Deploys** → **Trigger deploy** → **Deploy site**) so the function picks up the variable.

### 3. Test it

1. Open `/consultation/` on the deployed site (or a deploy preview, if you added that context) and submit a test request.
2. You should see "Thank you! Your request has been sent." on the page, and a "[UXR] New consultation request" message should appear in #newclients.
3. If you get the error message instead, open **Logs** → **Functions** → **consultation** in Netlify:
   - `SLACK_NEWCLIENTS_WEBHOOK_URL is not set`: the variable is missing, scoped to the wrong context, or the site hasn't been redeployed since you added it.
   - `Slack responded with 403` or `404`: the webhook was revoked or the URL was copied incorrectly. Create a new webhook.

Submissions don't work under `npm run dev`, because Astro's dev server doesn't run Netlify functions. Test on a deploy preview instead.

## Contributing

1. Branch off of `main`: `git checkout -b your-branch-name main`
2. Make your changes and verify with `npm run lint` and `npm run check`
3. Push your branch and open a pull request on GitHub against `main`
4. Once approved by another developer, merge the PR into `main`

Merging into `main` triggers Netlify to rebuild and deploy the production site automatically — no manual deploy step is needed.
