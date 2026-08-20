## Security Restrictions

**CRITICAL: The following actions are FORBIDDEN:**

1. **Git commits/pushes**: Never execute `git commit`, `git push`, `git add`, or any commands that modify git history or push to remote repositories
2. **Environment variables**: Never read, modify, or create `.env`, `.env.local`, `.env.production`, or any other environment/secrets files
3. **SSH/credentials**: Never access SSH keys, API tokens, passwords, or any credential files

## Accessibility

Accessibility coding rules: WCAG 2.1 AA conformance, semantic structure, keyboard support, focus management. Apply when writing or modifying UI code.

**Motion:**
- Route in-view animations through `AnimateInView`. It renders a `data-animate` attribute that the reduced-motion rule in `styles/global.css` and the `<noscript>` block in `BaseLayout.astro` both key off. Hand-rolled hidden initial states bypass those fallbacks.
- Animated content is server-rendered with an inline `opacity:0`, so anything that hides content before JS runs must have a matching fallback that leaves it readable. Never ship content that is only visible after hydration.
- Autoplaying media must not autoplay under `prefers-reduced-motion`, and must still pause when scrolled out of view.

## Hydration

- `client:*` directives belong only on framework (React) components. Putting one on an `.astro` component does nothing and warns at build time.
- `client:visible` is appropriate for below-the-fold `AnimateInView` islands. Astro's observer controls when the island hydrates; after hydration, the component's in-view check still animates from its hidden state to its visible state. Keep `client:visible` when avoiding unnecessary hydration is the priority, use `client:visible={{ rootMargin: '200px' }}` when an island should hydrate shortly before it reaches the viewport, and use `client:idle` only when hydrating every instance after initial page load is intentional (for example, `Stat.tsx`).
- **Never server-render a shadow-DOM web component.** `ClientRouter` re-parses each swapped-in page, which revives any server-rendered declarative shadow root (`<template shadowrootmode>`). When the component then calls `attachShadow` on that host it throws `NotSupportedError`, React unwinds the island, and the **entire island renders blank** — not just the widget. A hard page load works, because the element upgrades before React runs and takes its update path instead, so this only shows up on client-side navigation.
  Mount such components on the client only and give them a real server-rendered fallback. `Stat.tsx` does this with a `mounted` flag: it renders the number as plain text until `NumberFlow` takes over, which also keeps the value correct with JS disabled. This applies to any shadow-DOM element, not just NumberFlow.

## Code Quality

- Avoid unnecessary abstractions or over-engineering. Write clear, straightforward code.
- Avoid redundant components or styles.
- `npm run lint` and `npm run check` are the only verification gates in this repo — there is no test suite. Both must pass before any change is considered done.

## Dependencies

- **Do not upgrade TypeScript to 7.x.** TS 7 ships without a stable programmatic API. `@typescript-eslint/parser` peers on `typescript <6.1.0` and `@astrojs/check` on `^5 || ^6`, so TS 7 breaks both `npm run lint` and `npm run check`. Revisit once that API lands (expected 7.1).
- `eslint-plugin-astro` is held at 1.x. v3 requires `eslint >=10` **and** `eslint-plugin-jsx-a11y >=6.10.2`, but jsx-a11y does not yet support ESLint 10 — the constraints are unsatisfiable. Do not force it with `--legacy-peer-deps`.


## Components and Styling

**Component Usage:**
- Use starter components such as `Container` when possible

**Style Organization:**
- Styles are defined in `*.styles.ts` files as exported constants
- Use Tailwind utility classes as string values
- Export individual style constants or style object maps
- Some common style object maps in `utilities/datasource.ts`

## Tailwind CSS v4 / Decanter Conventions

**Numeric Scale:**
- Base unit: `--spacing: 0.1rem` (1px)
- Numeric values map directly: `gap-32` = 32px, `h-80` = 80px, `max-w-720` = 720px
- **Never use square bracket notation for numeric pixel values** (e.g., ❌ `gap-[32px]`, ✅ `gap-32`)
- Examples: `w-100` (100px), `p-16` (16px), `h-24` (24px), `max-w-960` (960px)

**Typography Values:**
- Prefer named line-height tokens first: `leading-none`, `leading-tight`, `leading-display`, `leading-snug`, `leading-cozy`, `leading-normal`
- Use numeric scale without brackets only when no named token matches the design intent (e.g., `leading-20`, `leading-28`)
- **Avoid arbitrary pixel values when a named or numeric utility works:** ❌ `leading-[20px]`, ✅ `leading-snug` preferred, or `leading-20` if necessary
- Text sizes: Use predefined `text-*` utilities (`text-14`, `text-16`, `text-20`) or custom utility scale such as `type-4` or `fluid-type-6` for responsive sizes

**Spacing and Sizing:**
- Use numeric scale for padding, margin, gap, width, height, max-width, etc (e.g., `p-16`, `mb-24`, `gap-32`, `w-200`, `h-80`, `max-w-720`)
- For responsive values, use Decanter's responsive spacing classes (e.g., `rs-p-3`, `rs-mb-4`, `rs-px-0`)

**CSS Selector Prefixes:**
- CSS selectors with brackets are fine: `[&>b]:font-semibold`, `[&_strong]:font-bold`
- These are selector prefixes, not style values, and cannot be simplified

**Custom Tokens:**
- For non-numeric values (e.g., `max-w-prose`), use custom tokens defined in decanter theme
