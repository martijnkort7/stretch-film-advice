---
name: Stretch Film Advice
description: Premium B2B advisory site for Egbert Kort — independent stretch film and pallet wrapping consulting across 25+ European countries.
version: alpha

# ─────────────────────────────────────────────────────────────
# COLORS — raw palette mirrors src/app/globals.css @theme tokens
# ─────────────────────────────────────────────────────────────
colors:
  navy.950: "#0a1628"  # primary surface (footer, hero, dark sections)
  navy.900: "#0f1f38"
  navy.800: "#162a4a"
  navy.700: "#1e3a5f"
  navy.600: "#2a4a73"

  blue.700: "#1447c0"
  blue.600: "#1b4fd8"  # primary CTA fill
  blue.500: "#2563eb"  # focus ring
  blue.400: "#3b82f6"  # skip-to-content background
  blue.300: "#60a5fa"

  emerald.500: "#10b981"  # savings emphasis (used sparingly)

  red.600: "#c8102e"   # client brand accent — overlines on light bg
  red.500: "#dc2626"
  red.400: "#f87171"   # overlines on dark bg

  slate.50:  "#f8fafc"
  slate.100: "#f1f5f9"
  slate.200: "#e2e8f0"
  slate.300: "#cbd5e1"
  slate.400: "#94a3b8"
  slate.500: "#64748b"
  slate.600: "#475569"
  slate.700: "#334155"
  slate.800: "#1e293b"

  white: "#ffffff"
  black: "#000000"

# ─────────────────────────────────────────────────────────────
# SEMANTIC — intent layer mapped onto raw palette
# ─────────────────────────────────────────────────────────────
semantic:
  surface.base:     "{colors.white}"      # default page background
  surface.muted:    "{colors.slate.50}"   # alternating section background
  surface.primary:  "{colors.navy.950}"   # dark sections, hero, footer

  text.primary.onLight: "{colors.navy.950}"
  text.primary.onDark:  "{colors.white}"
  text.muted.onLight:   "{colors.slate.600}"
  text.muted.onDark:    "{colors.slate.300}"
  text.subtle.onDark:   "{colors.slate.400}"

  action.primary:        "{colors.blue.600}"   # primary CTA fill
  action.primary.hover:  "{colors.white}"      # primary CTA inverts on hover
  action.secondary:      "{colors.navy.950}"   # outline button border + text
  action.ghost.border:   "rgba(255,255,255,0.5)"
  action.ghost.fill:     "rgba(255,255,255,0.05)"

  accent.onLight: "{colors.red.600}"   # overlines, KvK, key emphasis
  accent.onDark:  "{colors.red.400}"

  focus.ring: "{colors.blue.500}"

  border.default: "{colors.slate.200}"
  border.strong:  "{colors.navy.950}"

# ─────────────────────────────────────────────────────────────
# TYPOGRAPHY — Instrument Serif (display) + Inter (UI/body)
# ─────────────────────────────────────────────────────────────
typography:
  font.serif: "Instrument Serif, Georgia, 'Times New Roman', serif"
  font.sans:  "Inter, system-ui, -apple-system, sans-serif"

  display.hero:
    fontFamily: "{typography.font.serif}"
    fontSize: { mobile: 48px, sm: 60px, md: 72px }
    fontWeight: 400
    letterSpacing: -0.02em
    lineHeight: 1.05

  heading.h2:
    fontFamily: "{typography.font.serif}"
    fontSize: { mobile: 30px, sm: 36px, md: 48px }   # text-3xl sm:text-4xl md:text-5xl
    fontWeight: 400
    letterSpacing: -0.01em
    lineHeight: 1.15

  heading.counter:
    fontFamily: "{typography.font.serif}"
    fontSize: { mobile: 36px, sm: 48px, md: 72px }   # text-4xl sm:text-5xl md:text-7xl
    fontWeight: 400
    letterSpacing: -0.01em

  heading.faq:
    fontFamily: "{typography.font.serif}"
    fontSize: 18px      # text-lg
    fontWeight: 500

  body.lg:
    fontFamily: "{typography.font.sans}"
    fontSize: 18px
    lineHeight: 1.625
    color: "{semantic.text.muted.onLight}"

  body.base:
    fontFamily: "{typography.font.sans}"
    fontSize: 16px
    lineHeight: 1.6

  body.sm:
    fontFamily: "{typography.font.sans}"
    fontSize: 14px
    lineHeight: 1.5

  overline:
    fontFamily: "{typography.font.sans}"
    fontSize: 12px
    fontWeight: 600
    letterSpacing: 0.2em
    textTransform: uppercase
    color: "{semantic.accent.onLight}"
    marginBottom: 16px

# ─────────────────────────────────────────────────────────────
# SPACING — 4px grid via Tailwind defaults
# ─────────────────────────────────────────────────────────────
spacing:
  section.y.mobile:  48px   # py-12
  section.y.desktop: 96px   # md:py-24
  container.maxWidth: 1280px # max-w-7xl
  container.x.mobile:  24px # px-6
  container.x.desktop: 32px # lg:px-8
  prose.maxWidth: 768px      # max-w-3xl for SectionHeading copy

# ─────────────────────────────────────────────────────────────
# RADIUS — restrained; full only where appropriate (skip-link, badges)
# ─────────────────────────────────────────────────────────────
rounded:
  none: 0
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px   # only for skip-to-content link, never for buttons

# ─────────────────────────────────────────────────────────────
# MOTION — values mirrored from src/components/motion/
# ─────────────────────────────────────────────────────────────
motion:
  duration.fast:     0.2s   # button hover, color shifts
  duration.base:     0.3s   # accordion open/close
  duration.reveal:   0.5s   # FadeIn, StaggerItem
  duration.counter:  2s     # AnimatedCounter

  easing.standard:   "cubic-bezier(0.16, 1, 0.3, 1)"   # FadeIn, StaggerItem
  easing.counter:    "cubic-bezier(0, 0, 0.2, 1)"       # ease-out for counters
  easing.accordion:  "ease-out"

  fadeIn.offset:     24px
  fadeIn.viewport:   "{ once: true, margin: '-50px' }"
  stagger.delay:     0.1s   # 100ms between children

  active.scale: 0.97        # button :active

# ─────────────────────────────────────────────────────────────
# COMPONENTS — token-level definitions for UI primitives
# Source: src/components/ui/, src/components/layout/, src/components/motion/
# ─────────────────────────────────────────────────────────────
components:
  button.primary:
    backgroundColor: "{semantic.action.primary}"
    textColor: "{colors.white}"
    hover.backgroundColor: "{colors.white}"
    hover.textColor: "{semantic.action.primary}"
    hover.shadow: "md"
    focus.ring: "{semantic.focus.ring}"
    transition: "color, background-color, box-shadow, transform 0.2s"
    rounded: "{rounded.none}"   # square corners by design
    active.scale: "{motion.active.scale}"

  button.secondary:
    backgroundColor: transparent
    border: "1px solid {semantic.action.secondary}"
    textColor: "{semantic.action.secondary}"
    hover.backgroundColor: "{semantic.action.secondary}"
    hover.textColor: "{colors.white}"
    focus.ring: "{semantic.action.secondary}"
    rounded: "{rounded.none}"

  button.ghost:
    backgroundColor: "{semantic.action.ghost.fill}"
    border: "1px solid {semantic.action.ghost.border}"
    textColor: "{colors.white}"
    hover.backgroundColor: "rgba(255,255,255,0.10)"
    focus.ring: "{colors.white}"
    rounded: "{rounded.none}"
    use: "Only on dark/navy surfaces"

  button.size:
    sm: { paddingX: 16px, paddingY: 8px,  fontSize: 14px }
    md: { paddingX: 24px, paddingY: 12px, fontSize: 16px }
    lg: { paddingX: 32px, paddingY: 16px, fontSize: 16px }

  section.light:
    backgroundColor: "{colors.white}"
    textColor: "{semantic.text.primary.onLight}"
    paddingY: "{spacing.section.y.mobile} (md: {spacing.section.y.desktop})"

  section.dark:
    backgroundColor: "{semantic.surface.muted}"
    textColor: "{semantic.text.primary.onLight}"

  section.navy:
    backgroundColor: "{semantic.surface.primary}"
    textColor: "{colors.white}"

  container:
    maxWidth: "{spacing.container.maxWidth}"
    paddingX: "{spacing.container.x.mobile} (lg: {spacing.container.x.desktop})"
    centered: true

  sectionHeading:
    overline: "{typography.overline}"
    heading: "{typography.heading.h2}"
    subtitle: "{typography.body.lg}"
    proseMaxWidth: "{spacing.prose.maxWidth}"
    align: "left | center"
    dark: "boolean — flips overline + text colors for navy bg"

  faqAccordion:
    item.border: "1px solid {semantic.border.default}"
    item.background: "{colors.white}"
    trigger.padding: "20px 24px"
    trigger.hover.background: "{semantic.surface.muted}"
    trigger.focus.ring: "{semantic.focus.ring}"
    question.typography: "{typography.heading.faq}"
    answer.typography: "{typography.body.base} (color: {semantic.text.muted.onLight})"
    chevron.size: 20px
    chevron.color: "{colors.slate.400}"
    rotation.duration: 0.3s

  header:
    position: fixed
    zIndex: 50
    background.atTop: transparent
    background.scrolled: "{colors.white}"
    background.transition: 0.3s
    cta.atTop: "button.ghost"
    cta.scrolled: "button.primary"
    activeLink.indicator: "red underline (scale-x animation)"

  footer:
    backgroundColor: "{semantic.surface.primary}"
    textColor: "{colors.white}"
    layout: "3-column grid (company / nav / contact)"
    bottomBar: "copyright + KvK"

  skipToContent:
    background: "{colors.blue.400}"
    rounded: "{rounded.sm}"
    visibleOn: "focus only"
---

# Stretch Film Advice — Design System

> **For AI agents:** This file is the single source of truth for the visual identity, components, motion, and voice of this site. When generating new pages, sections, or components, read this file first. Token names in `{curly.braces}` reference the YAML front matter above. When in doubt: match what already ships in `src/components/`.

## 1. Overview

Stretch Film Advice is the consulting practice of Egbert Kort, a 45-year industry veteran who advises FMCG, manufacturing, logistics, and 3PL companies on stretch film and pallet wrapping machine optimization across 25+ European countries. The audience is industrial procurement and operations decision-makers who choose advisors on credibility, not aesthetics.

The design system optimizes for **authority, evidence, and restraint**. The visual reference is McKinsey.com applied to industrial logistics: editorial serif headlines, generous whitespace, a single restrained color story (navy + white + sparing red), and quantified claims surfaced as first-class typographic elements. It is intentionally **not** consumer SaaS, **not** glossy corporate, **not** trend-driven.

## 2. Brand Essence & Positioning

- **Independent advisor, not a vendor.** The free assessment is positioned as enabled by film supply, not as a sales hook. Visual language never reads as "shop now."
- **Evidence-driven.** Claims are paired with numbers (`95%`, `30–50%`, `1,000+ sites`, `45 years`). The design surfaces these via large serif counters, comparison tables, and overlines.
- **Personal authority.** Egbert speaks in first-person across the site. Photography shows him in working contexts (factory floors, machines, holding-force measurements). The design treats his presence as evidence of the practice's depth.
- **Editorial posture.** Sections breathe; copy is paragraph-led; layouts are asymmetric (60/40, 70/30) more often than they are symmetrical grids.
- **Pan-European reach without flag-waving.** Mentions of "25+ countries" appear as quiet trust signals, never as stock-photo globes or country flags.

## 3. Voice & Tone

The site is written in Egbert's voice: expert, direct, quantified, personal. Copy is imported from `src/lib/content.ts` — never hardcode strings in JSX.

**On-brand:**
- "Most pallets I see are not as stable as they could be."
- "95% of my assessments achieve more than 30% film reduction."
- "I measure before, I measure after."
- "I configure your machines on-site, adjusting pre-stretch ratios, wrap force, and overlap patterns."

**Off-brand:**
- "We're passionate about empowering your supply chain journey." (marketing fluff)
- "The world's #1 stretch film consultancy!" (superlative, exclamation)
- "🚀 Save big on packaging today!" (emoji, generic CTA energy)
- "Discover our innovative solutions." (vague, vendor-coded)

**Tone rules:**
- First person singular ("I") in body copy and CTAs that describe Egbert's actions. Third person ("Stretch Film Advice", "the advisor") in metadata, schema, and external-facing copy.
- Quantify wherever possible — replace "many" with a number, replace "significant" with a percentage.
- No exclamation marks. No emoji. No em-dash-driven enthusiasm.
- Use `…` (ellipsis) not `...`. Use `–` for ranges (`30–50%`).
- Imperative CTAs only: "Book Your Free Assessment", "See How It Works". Never "Click here", "Learn more!", or "Get started today!"

## 4. Colors

The palette is restrained: dominant navy + white, a single primary blue for action, red used sparingly for accent and emphasis. Light and dark sections alternate to create rhythm.

**Raw palette:** see `colors.*` in YAML. Mirrors `src/app/globals.css @theme inline` exactly.

**Semantic mapping:** see `semantic.*`. Use semantic tokens in new code wherever possible — they encode intent, not implementation.

**Section background rhythm:**
- `Section variant="light"` → white (`{colors.white}`)
- `Section variant="dark"` → slate-50 (`{semantic.surface.muted}`)
- `Section variant="navy"` → navy-950 (`{semantic.surface.primary}`)

Alternate them across a page. Three light sections in a row reads as flat; two navy sections in a row reads as heavy.

**Red accent (`{semantic.accent.onLight}` / `.onDark`):**
- Always for: section overlines, active nav underline, link emphasis, KvK number in footer.
- Never for: body copy, large surfaces, CTA fills, decorative elements.

**Text colors:**
- On light: `{semantic.text.primary.onLight}` (navy-950) for primary, `{semantic.text.muted.onLight}` (slate-600) for secondary.
- On dark: `{semantic.text.primary.onDark}` (white) for primary, `{semantic.text.muted.onDark}` (slate-300) for secondary, `{semantic.text.subtle.onDark}` (slate-400) for tertiary.

## 5. Typography

Two families, no exceptions:
- **Instrument Serif** — display, headings, counters. Loaded via `next/font/google` at weight 400 only.
- **Inter** — body, UI, buttons, labels. Loaded via `next/font/google`.

Both via `next/font` with `display: swap`. Configured in `src/app/layout.tsx`.

**Type scale:** see `typography.*` in YAML.

**Heading rules:**
- All `h1`/`h2` headings use `font-serif`, `tracking-tight`, `leading-tight`.
- Headlines scale: mobile → desktop, never fixed pixel sizes.
- Hierarchy is established through size and weight. Color only differentiates between dark/light surfaces — never use color alone to signal hierarchy.

**Body rules:**
- Default body is `body.lg` (18px) for primary marketing copy, `body.base` (16px) for UI and table cells.
- Line-length max 65–75ch (`max-w-3xl` ≈ 768px is the standard prose container).
- Line-height 1.5–1.75. Default `leading-relaxed` (1.625) for marketing prose.

**Overline pattern:**
```
font-sans, 12px, font-semibold, tracking-[0.2em], uppercase, red-600 (light) / red-400 (dark)
mb-4 below the overline before the H2
```
Used for every section's eyebrow label. Imported from `content.ts` (`overline` field).

**Numerals:** use `font-variant-numeric: tabular-nums` in any column where numbers must align (comparison tables, stats grids).

## 6. Layout & Spacing

- **Container:** `max-w-7xl` (1280px), centered, `px-6 lg:px-8`. Implemented in `src/components/ui/Container.tsx` — wrap every section's content in a `<Container>`.
- **Section vertical rhythm:** `py-12 md:py-24` (48px mobile, 96px desktop). Implemented in `src/components/ui/Section.tsx`. Do not override unless there is a clear narrative reason (e.g. tight pairing of two related sections).
- **Asymmetric layouts** (60/40, 70/30) are preferred over symmetric 50/50 grids. Symmetric grids read corporate; asymmetric reads editorial.
- **Whitespace is content.** Resist the urge to "fill" empty space — generous margins are a brand asset that signal premium positioning.
- **Prose width:** wrap headings + lead paragraphs in `max-w-3xl` (768px). Body that exceeds this becomes hard to scan.
- **Breakpoints:** mobile <768px, tablet 768–1024px, desktop >1024px. Tailwind defaults: `sm:` 640px, `md:` 768px, `lg:` 1024px.

## 7. Imagery & Photography

**Subject matter (allowed):**
- Egbert in industrial settings (factory floors, machine inspection, holding-force measurement, tilt tests, training operators).
- Pallet wrapping in progress (real machines, real loads).
- Before/after comparisons (film weight, holding force readings, wrap quality).
- Detail shots of film, machines, and measurement tools.

**Style rules:**
- Documentary, naturally lit, unstaged. Industrial environments, real workplaces.
- Color palette in photos should sit comfortably alongside the navy/white site palette. Avoid heavily saturated or color-graded shots.
- Faces are fine; smiling-into-camera corporate stock is not.

**Forbidden:**
- Stock photography of generic warehouses, "diverse team meetings," handshakes, abstract supply chain visuals.
- AI-generated images of any kind.
- Glossy product shots that read as packaging marketing.
- Country flags, globe icons, or other clichéd "international" visuals.

**Technical:**
- Format: WebP for content imagery, PNG for logos with transparency, JPG for OG images (1200×630).
- Always `next/image` with explicit `width` and `height` (or `fill` with sized parent).
- Above-the-fold hero images: `priority`. Everything else: lazy-loaded by default.
- Alt text describes the action ("Egbert measuring pallet holding force on factory floor"), not the decoration. For purely decorative images, `alt=""` plus `aria-hidden="true"`.
- Storage: `/public/images/{brand,process,team,case-studies}/`.

## 8. Motion

**Philosophy:** motion serves comprehension, not decoration. Subtle scroll-reveals on section content; brief micro-interactions on hover; smooth count-ups for headline stats. No page transitions on a 5-page site.

**Primitives** (all in `src/components/motion/`, all `"use client"`):

- **`<FadeIn>`** — opacity 0→1 with 24px directional offset (`up`/`down`/`left`/`right`). Duration 0.5s, easing `cubic-bezier(0.16, 1, 0.3, 1)`. Triggered via `whileInView` with `viewport={{ once: true, margin: '-50px' }}` so it fires 50px before the element enters the viewport, once per session.
- **`<StaggerChildren>` + `<StaggerItem>`** — stagger 0.1s (100ms) between children. Each item fades up 24px with the same easing.
- **`<AnimatedCounter>`** — counts from 0 to target value over 2s, easing `cubic-bezier(0, 0, 0.2, 1)` (ease-out). Renders inside an `Instrument Serif` 4xl/5xl/7xl span.

**Hover micro-interactions:**
- Buttons: 0.2s color/background/shadow transition; `active:scale-[0.97]`.
- Nav links: red underline reveal via `scale-x` from 0 to 1 on hover (or `aria-current="page"`).
- Cards/links: optional 1.02 scale, never larger.

**Hard rules:**
- Animate only `transform` and `opacity` — they are compositor-friendly. Never animate `width`, `height`, `top`, `left`, `box-shadow` directly.
- Never use `transition: all`. List the properties explicitly (e.g. `transition-[color,background-color,box-shadow,transform]`).
- All durations ≤ 1s except `AnimatedCounter` (2s is the upper bound).
- All animations must respect `prefers-reduced-motion: reduce` (handled globally in `globals.css` — verify when adding new animations that they inherit the reset).
- Animations must be interruptible. Use `whileInView` with `once: true` so re-entries don't replay.

## 9. Components

All component implementations live in `src/components/`. The token definitions in the YAML `components.*` block are authoritative — when extending or duplicating a component, match those values.

### UI primitives — `src/components/ui/`

**`<Button>`** ([Button.tsx](src/components/ui/Button.tsx))
- Variants: `primary` (blue-600 fill, inverts to white-on-blue on hover), `secondary` (navy outline, fills navy on hover), `ghost` (white outline on dark surfaces only).
- Sizes: `sm` / `md` (default) / `lg`.
- Renders `<Link>` if `href` provided, else `<button>`.
- All variants: `active:scale-[0.97]`, `focus-visible:ring-2 ring-offset-2`.
- Square corners — never `rounded-full`.
- Use `ghost` only on navy/dark backgrounds.

**`<Container>`** ([Container.tsx](src/components/ui/Container.tsx))
- `max-w-7xl mx-auto px-6 lg:px-8`. Wrap every section's content in a Container.

**`<Section>`** ([Section.tsx](src/components/ui/Section.tsx))
- Variants: `light` (white), `dark` (slate-50), `navy` (navy-950).
- Default vertical padding `py-12 md:py-24`.
- Renders semantic `<section>`. Pass `id` for in-page anchor links.

**`<SectionHeading>`** ([SectionHeading.tsx](src/components/ui/SectionHeading.tsx))
- Renders overline (red, uppercase, tracked) + h2 (serif, tracking-tight) + optional subtitle (slate-600).
- Props: `overline`, `heading`, `subtitle`, `align` (`left` | `center`), `dark` (boolean — flips colors for navy sections).
- Wrap in `max-w-3xl` automatically.

**`<FAQAccordion>`** ([FAQAccordion.tsx](src/components/ui/FAQAccordion.tsx))
- Radix `Accordion.Root` with `type="single" collapsible`.
- Item: white bg, slate-200 border, no rounded corners.
- Question: `font-serif text-lg font-medium`.
- Answer: `text-base text-slate-600 leading-relaxed`.
- ChevronDown 20px, slate-400, rotates 180° when open.
- Open/close animation: 0.3s ease-out via `accordion-down`/`accordion-up` keyframes in `globals.css`.

**`<ComparisonTable>`** ([ComparisonTable.tsx](src/components/ui/ComparisonTable.tsx))
- Before/after/improvement column structure for verified results.
- Use `tabular-nums` for numeric columns.

**`<ExpandableText>`** ([ExpandableText.tsx](src/components/ui/ExpandableText.tsx))
- Truncates long prose with a "read more" toggle. Use sparingly — prefer rewriting copy to fit.

**`<MobileContactBar>`** ([MobileContactBar.tsx](src/components/ui/MobileContactBar.tsx))
- Sticky-to-bottom bar on mobile only, with phone/WhatsApp/email actions.

**`<ScrollToTop>`** ([ScrollToTop.tsx](src/components/ui/ScrollToTop.tsx))
- Floating button, appears after a scroll threshold.

**`<VideoPlayer>`** ([VideoPlayer.tsx](src/components/ui/VideoPlayer.tsx))
- Embedded video for the services page showcase.

**`<MagneticWrap>`** ([MagneticWrap.tsx](src/components/ui/MagneticWrap.tsx))
- Subtle pointer-following micro-interaction. Use sparingly on hero CTAs only.

**`<SchemaScript>`** ([SchemaScript.tsx](src/components/ui/SchemaScript.tsx))
- Renders JSON-LD schema. Not visual — included for completeness.

### Motion primitives — `src/components/motion/`

**`<FadeIn>`** ([FadeIn.tsx](src/components/motion/FadeIn.tsx)), **`<StaggerChildren>` + `<StaggerItem>`** ([StaggerChildren.tsx](src/components/motion/StaggerChildren.tsx)), **`<AnimatedCounter>`** ([AnimatedCounter.tsx](src/components/motion/AnimatedCounter.tsx)) — see §8 for behavior.

### Layout primitives — `src/components/layout/`

**`<Header>`** ([Header.tsx](src/components/layout/Header.tsx))
- Fixed, `z-50`, scroll-aware: transparent on home hero, white background after scroll threshold.
- Logo links to home with smooth scroll.
- Desktop nav with red underline reveal on hover and active page.
- CTA variant flips: `ghost` at top → `primary` after scroll.
- Mobile: hamburger triggers `<MobileNav>`.

**`<Footer>`** ([Footer.tsx](src/components/layout/Footer.tsx))
- Navy-950 background, white text.
- 3-column grid: company info / navigation / contact.
- Bottom bar with copyright and KvK number (`{semantic.accent.onDark}`).

**`<MobileNav>`** ([MobileNav.tsx](src/components/layout/MobileNav.tsx))
- Full-screen overlay with smooth transition, same nav items as desktop.

## 10. Accessibility Standards

The site must remain WCAG 2.1 AA compliant. Validate with axe DevTools or Lighthouse before shipping any new section.

**Semantic structure:**
- One `<h1>` per page; `<h2>`/`<h3>` in sequential order without skipping.
- Use `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>` — never `<div>` for these roles.
- Skip-to-content link is rendered in `layout.tsx` and visible on focus only.

**Keyboard & focus:**
- Every interactive element has a visible `focus-visible:ring-2 ring-offset-2` style (color: blue-500 by default, white on dark surfaces).
- Never `outline: none` without a focus replacement.
- Tab order matches visual order. Avoid positive `tabindex`.

**ARIA & labels:**
- Icon-only buttons require `aria-label`.
- Active nav link gets `aria-current="page"`.
- Form inputs have either a visible `<label htmlFor>` or `aria-label`.
- Decorative icons get `aria-hidden="true"`.

**Forms:**
- Inputs declare `autocomplete` and meaningful `name`.
- Use semantic `type="email" | "tel" | "url"` where applicable.
- Error messages live next to the field and are linked via `aria-describedby`.
- Submit buttons stay enabled and show a spinner during request.
- Focus the first error after a failed submit.

**Color contrast:**
- Body text ≥ 4.5:1 against its background. Large text (18px+ bold or 24px+) ≥ 3:1.
- Verify any new color pair (e.g. slate-400 text on white is borderline — only use for tertiary metadata, never primary copy).

**Touch & mobile:**
- Touch targets ≥ 44×44px. Buttons at default `md` size satisfy this; `sm` is borderline — pad with hit area if used standalone.
- No hover-only interactions. Every hover state has a touch/focus equivalent.
- No horizontal scroll at any viewport width.

**Motion:**
- Respect `prefers-reduced-motion` (handled globally in `globals.css`).
- Animations must be interruptible by user input.

**Internationalization:**
- `lang="en"` on `<html>`. Plan accommodates German (≈30% text expansion) and Dutch.
- All copy lives in `src/lib/content.ts` — never hardcode strings in JSX.

## 11. Do's and Don'ts

### Do

- ✅ Pull all copy from `src/lib/content.ts` — keeps i18n on the table and copy auditable.
- ✅ Use semantic tokens (`{semantic.action.primary}`) over raw palette tokens (`{colors.blue.600}`) when intent is clear.
- ✅ Alternate `Section variant="light" | "dark" | "navy"` across a page for rhythm.
- ✅ Wrap every section's content in `<Container>`. Wrap headings + lead in `max-w-3xl`.
- ✅ Use `Instrument Serif` for headings (h1, h2, counters, FAQ questions). Use `Inter` for everything else.
- ✅ Quantify claims: replace "many" with a number, "significant" with a percentage.
- ✅ Use red (`{semantic.accent}`) only for overlines, active states, KvK number, and key emphasis.
- ✅ Use `<FadeIn>` / `<StaggerChildren>` for scroll-reveals — never reach for raw `motion.div` unless the primitives can't express it.
- ✅ `next/image` with explicit `width`/`height` (or `fill`). `priority` only above the fold.
- ✅ Use first-person Egbert voice in body copy ("I measure", "I configure"). Third person in metadata.
- ✅ Use `…` (ellipsis) and `–` (en-dash for ranges).

### Don't

- ❌ **Gradient text effects** — undermines editorial authority.
- ❌ **`rounded-full` on buttons** — reads as consumer SaaS / startup. Buttons are square.
- ❌ **Card carousels or sliders** — implies retail/marketing, not advisory.
- ❌ **Glassmorphism, mesh gradients, neon shadows, blob backgrounds** — anti-McKinsey.
- ❌ **Emoji in body content or headings** — undermines seriousness. (Emoji in this DESIGN.md is acceptable as it's internal documentation, not site content.)
- ❌ **Stock photography** — generic warehouses, smiling executives, handshake imagery, country flags, globe icons.
- ❌ **AI-generated imagery** — at all, anywhere.
- ❌ **Hardcoded English strings in JSX** — must come from `content.ts` to keep i18n viable.
- ❌ **Custom hex colors outside the token palette** — extend `globals.css` and this file together if a new color is genuinely needed.
- ❌ **Animations longer than 1s** outside `<AnimatedCounter>` (which is the documented exception at 2s).
- ❌ **`transition: all`** — list the animated properties explicitly (e.g. `transition-[color,background-color,transform]`).
- ❌ **Animating `width`/`height`/`top`/`left`** — use `transform` and `opacity` only.
- ❌ **Symmetric 50/50 layouts as the default** — prefer 60/40 or 70/30 for asymmetric editorial feel.
- ❌ **Multiple accent colors competing in one section** — one accent at a time.
- ❌ **Exclamation marks**, marketing superlatives, "passionate", "innovative", "world-class", "industry-leading".
- ❌ **`outline: none`** without a `focus-visible` replacement.
- ❌ **Heavy drop shadows or thick horizontal rules** — borders are 1px slate-200; shadows are subtle.
- ❌ **Purple, pink, neon, or any color outside the palette** for decorative purposes.
- ❌ **Fonts other than Instrument Serif and Inter.** No Arial, Roboto, system-ui as primary.
