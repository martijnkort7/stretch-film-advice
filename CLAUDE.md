# Stretch Film Advice

Professional 5-page website for Egbert Kort / Stretch Film Advice — premium consulting positioning. Advises on multilayer stretch film + machine settings across 17 European countries.

**Design system:** see [DESIGN.md](./DESIGN.md) — single source of truth for visual identity, tokens, components, motion, voice, and anti-patterns. Read it before generating new pages, sections, or components.

## Commands

- `npm run dev` — Development server (port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npx prettier --write .` — Format code

## Architecture

- **Next.js 16**, App Router, TypeScript, React 19
- **Tailwind CSS v4** — CSS-first config via `@theme` in `globals.css`
- **Animations** — Motion for React (`motion/react`), isolated in `src/components/motion/`
- Server Components by default; `"use client"` only for animations, forms, mobile nav
- All text content in `src/lib/content.ts` as typed constants (i18n-ready, German planned)
- Images in `/public/images/` — always `next/image` with explicit dimensions
- Contact form posts to Formspree via `NEXT_PUBLIC_FORMSPREE_ID` — no API routes

## File Organization

```
src/app/                 — Pages (layout.tsx, page.tsx, about/, services/, contact/)
src/components/layout/   — Header, Footer, MobileNav, Navigation
src/components/ui/       — Button, Container, Section, SectionHeading, etc.
src/components/motion/   — FadeIn, StaggerChildren, AnimatedCounter (client)
src/components/sections/ — Page-specific sections grouped by page
src/lib/                 — content.ts, metadata.ts, utils.ts
```

## Development Workflow

After visual changes (CSS, images, layout), always clear the Next.js cache and restart the dev server so the user sees the update immediately:

```bash
rm -rf .next && npm run dev
```

## Code Style

- Named exports, one component per file, PascalCase.tsx
- Props: `interface {ComponentName}Props` in same file
- Tailwind class order: layout → sizing → spacing → typography → colors → effects
- Never hardcode strings in JSX — import from `content.ts`

## Rules

- `DESIGN.md` (root) — Visual identity, components, motion, voice, accessibility, anti-patterns. **Single source of truth for design.**
- `.claude/rules/project-conventions.md` — Content architecture, SEO, images, form specs, env vars
- `.claude/rules/vercel-react-best-practices.md` — Server Components, bundle size, performance
