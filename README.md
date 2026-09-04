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

## Contributing

1. Branch off of `main`: `git checkout -b your-branch-name main`
2. Make your changes and verify with `npm run lint` and `npm run check`
3. Push your branch and open a pull request on GitHub against `main`
4. Once approved by another developer, merge the PR into `main`

Merging into `main` triggers Netlify to rebuild and deploy the production site automatically — no manual deploy step is needed.
