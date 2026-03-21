---
paths:
  - 'src/**/*.{tsx,css}'
---

# Web Design Guidelines

## Accessibility

- Icon-only buttons require `aria-label`
- Form controls need `<label>` or `aria-label`
- Interactive elements must have keyboard handlers
- Use `<button>` for actions, `<a>`/`<Link>` for navigation (never `<div onClick>`)
- Images need `alt` text (or `alt=""` + `aria-hidden` if decorative)
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`
- Hierarchical headings: one `<h1>` per page, sequential levels
- Include skip-to-content link
- Color contrast minimum 4.5:1 for body, 3:1 for large text

## Focus States

- Visible focus indicators on all interactive elements (`focus-visible:ring-*`)
- Never `outline-none` without focus replacement
- Prefer `:focus-visible` over `:focus`

## Forms

- Inputs need `autocomplete` and meaningful `name` attributes
- Use semantic `type` (`email`, `tel`, `url`)
- Labels must be clickable (`htmlFor` or wrapping)
- Submit buttons stay enabled; show spinner during request
- Errors inline next to fields; focus first error
- Warn before navigation with unsaved changes

## Animation

- Honor `prefers-reduced-motion` — disable or reduce all animations
- Animate only `transform`/`opacity` (compositor-friendly)
- Never `transition: all` — list properties explicitly
- Animations must be interruptible by user input
- No animation durations longer than 1 second

## Typography

- Use ellipsis `…` not `...`
- `font-variant-numeric: tabular-nums` for number columns
- `text-wrap: balance` on headings
- Base font size 16px minimum
- Line height 1.5–1.75 for body text
- Maximum line length 65–75 characters

## Images

- `<img>` / `next/image` needs explicit `width` and `height`
- Below-fold images: `loading="lazy"` (default in next/image)
- Critical above-fold: `priority` prop

## Performance

- LCP target: under 2.5 seconds
- CLS target: under 0.1
- Lists >50 items: virtualize or `content-visibility: auto`
- Critical fonts: preload with `font-display: swap`

## Navigation

- Current page indicated in navigation
- Logo always links to homepage
- Mobile hamburger with smooth transition
- Consistent navigation across all pages

## Touch & Mobile

- Touch targets minimum 44x44px
- No hover-only interactions (provide fallback)
- Responsive: mobile (<768px), tablet (768–1024px), desktop (>1024px)
- No horizontal scroll at any viewport width
- `touch-action: manipulation` on interactive elements

## Dark Mode & Theming

- `<meta name="theme-color">` matches background
- Set `color-scheme` on `<html>` when using dark sections

## i18n Readiness

- No hardcoded strings in components — use content constants
- `lang` attribute on `<html>` element
- Design accommodates text expansion (~30% for German)
