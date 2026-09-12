# Code Review — sws-astro

**Scope:** Full repository review (branch `SWSWEB-86` is even with `main`; reviewed current codebase)
**Date:** 2026-08-13

Findings are ranked most-severe first. Each finding includes the file/line, what's wrong, and what breaks.

---

## Summary Table

| # | Severity | File | Issue |
|---|----------|------|-------|
| 1 | Major | Multiple `.astro` files | `AnimateInView client:visible` violates CLAUDE.md — animations flash/skip |
| 2 | Major | `CentennialSection.astro:37` | `Video client:load` inside `AnimateInView client:visible` — inconsistent hydration |
| 3 | Minor | `BaseLayout.astro:45,71` | Duplicate `<link rel="sitemap">` |
| 4 | Minor | `SiteHeader.tsx:44-52` | Drawer keyboard-accessible before hydration (missing initial `inert`) |
| 5 | Minor | `CollaborationSection.tsx:32` | Grammar: "bring" → "brings" in homepage h2 |
| 6 | Minor | `FeatureContent.tsx:66-73` | Award images use `<img>` — miss Astro image optimization |
| 7 | Suggestion | `AnimateInView.tsx:48` | `LazyMotion` nested per component — should be hoisted to layout |
| 8 | Suggestion | `CtaLink.tsx:19` | External link detection too broad (`startsWith('http')`) |
| 9 | Suggestion | `Container.tsx:37` | Dead falsy guard on `width` (always truthy) |
| 10 | Suggestion | `FooterLocal.tsx:21` | Phantom `aria-hidden` grid spacer — replace with `col-start-2` |

---

## Major

### 1. `AnimateInView client:visible` double-gates visibility — CLAUDE.md violation

**Files:** `MomentumSection.astro:49`, `CentennialSection.astro:35`, `DrupalSection.astro:44,54,64,74`, `WorkSection.astro:48,67,112,122,157,193,227,249,267`, `Testimonials.astro:42`, `ExpertiseSection.astro:34`, `ApartSection.astro:62`, `PartnerSection.astro:138,164`, `ServicesSection.astro:129` (via `Service client:visible`)

**Problem:** `AnimateInView` contains its own `useInView` IntersectionObserver. `client:visible` means Astro only hydrates the island once it scrolls into view. When hydration fires, the element is already intersecting, so Motion's IO resolves almost immediately. The initial render briefly shows content at `opacity: 0` (the hidden variant's inline style), then jumps to visible — eliminating the smooth scroll-into-view animation for users and producing a flash of invisible content.

CLAUDE.md states explicitly:
> "Do not gate hydration *and* an in-view check on visibility at once. `client:visible` already means 'has scrolled into view', so a second visibility check inside the component resolves in the same batch and the animation is skipped. When a component should be alive early but animate later, pair `client:idle` with an in-view check."

**Fix:** Change every `AnimateInView client:visible` to `AnimateInView client:idle`. Do the same for `Service client:visible` since it wraps `AnimateInView` internally. `client:idle` hydrates during browser idle time so the component is ready before the user scrolls to it — the IO fires naturally as the element enters the viewport and the animation plays as intended.

---

### 2. `CentennialSection.astro` inner `Video` uses `client:load` while outer `AnimateInView` uses `client:visible`

**File:** `CentennialSection.astro:37`

```astro
<AnimateInView client:visible animation="fadeIn">
  <Video client:load ... />
</AnimateInView>
```

**Problem:** `Video client:load` hydrates immediately on page load (blocking), while its parent `AnimateInView client:visible` only hydrates when scrolled into view. The Video island is a live React root inside an unhydrated `AnimateInView` shell — this split-hydration creates a mismatch: Video starts running (potentially autoplaying) before the AnimateInView wrapper has mounted, meaning the `fadeIn` animation never wraps the video correctly. The other `Video` usages consistently use `client:visible` to match `AnimateInView`. This appears to be an accidental inconsistency. (`MomentumSection.astro:51` and `WorkSection.astro` use `Video client:visible` correctly.)

**Fix:** Change `client:load` to `client:visible` on the `CentennialSection.astro` `Video`. Then also apply fix #1 (change `AnimateInView client:visible` → `client:idle`).

---

## Minor

### 3. Duplicate `<link rel="sitemap">` in `BaseLayout.astro`

**File:** `BaseLayout.astro:45` and `BaseLayout.astro:71`

```html
<!-- line 45 -->
<link rel="sitemap" href="/sitemap-index.xml" />
...
<!-- line 71 -->
<link rel="sitemap" href="/sitemap-index.xml" />
```

**Problem:** The sitemap link is emitted twice on every page. Search engines and validators treat this as redundant; some crawlers may process both, leading to unnecessary requests.

**Fix:** Delete the duplicate at line 71.

---

### 4. Mobile drawer keyboard-accessible before hydration

**File:** `SiteHeader.tsx:44-52`

```tsx
useEffect(() => {
  const drawer = drawerRef.current;
  if (!drawer) return;
  if (drawerOpen) {
    drawer.removeAttribute('inert');
  } else {
    drawer.setAttribute('inert', '');  // only set after mount
  }
}, [drawerOpen]);
```

**Problem:** The `inert` attribute is only applied via `useEffect` — after React hydrates. `SiteHeader` uses `client:load`, but on slow connections there is a window between initial HTML delivery and hydration where the mobile nav drawer (visually translated off-screen via `translate-x-full`) is reachable by keyboard. Tab order reaches all anchors inside the drawer without the user opening it.

**Fix:** Add `inert=""` directly to the drawer's JSX as a default attribute, and let the effect continue to toggle it. Since the drawer starts closed, this ensures the inert state is present in the server-rendered HTML:

```tsx
<div
  ref={drawerRef}
  id="mobile-nav-drawer"
  inert={!drawerOpen || undefined}
  ...
>
```

Note: `inert` as a boolean JSX attribute is supported in React 19.

---

### 5. Grammar error in heading copy

**File:** `CollaborationSection.tsx:32`

```tsx
<h2 className="fluid-type-1 font-semibold rs-mb-1">Collaboration that bring ideas to life</h2>
```

**Problem:** Subject-verb agreement error — "Collaboration … **bring**" should be "**brings**." This is a public-facing `h2` on the homepage.

**Fix:** Change `bring` → `brings`.

---

### 6. Award images bypass Astro's `<Image>` optimization

**File:** `FeatureContent.tsx:66-73`

```tsx
<img
  key={award.image.src}
  src={award.image.src}
  width={award.image.width}
  height={award.image.height}
  alt={award.alt ?? ''}
  loading="lazy"
/>
```

**Problem:** Award badge images are `.png` files served as-is. Using a plain `<img>` skips Astro's `<Image>` pipeline, which would convert to WebP/AVIF and apply responsive sizing. The images are already imported as `ImageMetadata`, so all necessary info is available. The manually added `loading="lazy"` is the only optimization present.

**Fix:** Since `FeatureContent` is a `.tsx` React component (not an `.astro` file), use `@astrojs/react`'s approach — either move award rendering to an Astro component wrapper, or accept pre-optimized `src` strings as props (the caller in `.astro` context can call `getImage()` before passing). Alternatively, at minimum ensure `loading="lazy"` and `decoding="async"` are present (only `loading="lazy"` is set today).

---

## Suggestions

### 7. `LazyMotion` re-instantiated for every animated element

**File:** `AnimateInView.tsx:48`

```tsx
return (
  <LazyMotion features={domAnimation}>
    <MotionComponent ...>
      {children}
    </MotionComponent>
  </LazyMotion>
);
```

**Problem:** `LazyMotion` is designed to be placed once high in the component tree to lazy-load Motion's animation bundle. Wrapping every `AnimateInView` in its own `LazyMotion` creates redundant React nodes on every animated element across every page — dozens per page. Motion deduplicates the actual feature loading, but the component wrapper overhead is unnecessary.

**Fix:** Move `<LazyMotion features={domAnimation}>` to `BaseLayout.astro` wrapping the body (or to a root React shell), and remove it from inside `AnimateInView`.

---

### 8. External link detection covers `http://` but should only match off-site links

**File:** `CtaLink.tsx:19`

```tsx
const isExternalLink = href.startsWith('http');
```

**Problem:** `startsWith('http')` matches both `https://` and `http://`. An `http://` internal link (e.g., a dev environment URL) would be marked external. A protocol-relative URL like `//example.com` would be treated as internal. The real intent is "does this link leave the site?" — a URL check is more reliable than a prefix check.

**Fix:** Use `href.startsWith('https://') || href.startsWith('http://')` for now, or better, use a URL guard:

```tsx
const isExternalLink = /^https?:\/\//.test(href);
```

---

### 9. Dead falsy guard on `width` in `Container`

**File:** `Container.tsx:37`

```tsx
width ? styles.widths[width] : '',
```

**Problem:** `width` defaults to `'site'` and is typed as `types.WidthType` (a string literal union), so it can never be falsy. The ternary's `''` branch is unreachable dead code.

**Fix:** Simplify to `styles.widths[width]`.

---

### 10. Phantom `<div aria-hidden="true" />` grid spacer in `FooterLocal`

**File:** `FooterLocal.tsx:21`

```tsx
<div className="grid md:grid-cols-2 md:gap-40">
  <div aria-hidden="true" />   {/* phantom spacer */}
  <div className="max-w-4xl flex-1 basis-md">
    ...
  </div>
</div>
```

**Problem:** An empty `aria-hidden` div is used as a left-column placeholder to push the CTA content to the right column. This is a layout hack that adds a DOM node with no semantic value. A CSS-only solution is cleaner and avoids the phantom element.

**Fix:** Replace with `justify-end` or `justify-items-end` on the grid, or use `md:col-start-2` on the content div to push it to column 2 without needing a spacer:

```tsx
<div className="grid md:grid-cols-2 md:gap-40">
  <div className="md:col-start-2 max-w-4xl flex-1 basis-md">
    ...
  </div>
</div>
```
