### Components and Styling

**Component Usage:**
- Use starter components such as `Grid`, `FlexBox`, `WidthBox`, `Container` when possible

**Style Organization:**
- Styles are defined in `*.styles.ts` files as exported constants
- Use Tailwind utility classes as string values
- Export individual style constants or style object maps
- Some common style object maps in `utilities/datasource.ts`

### Tailwind CSS v4 / Decanter Conventions

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
- For non-numeric values (e.g., `max-w-prose`), use custom tokens defined in decanter theme`
