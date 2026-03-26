# Stretch Film Advice

Professional 4-page website for Egbert Kort / Stretch Film Advice — premium consulting positioning. Advises on multilayer stretch film + machine settings across 17 European countries.

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

## Code Style

- Named exports, one component per file, PascalCase.tsx
- Props: `interface {ComponentName}Props` in same file
- Tailwind class order: layout → sizing → spacing → typography → colors → effects
- Never hardcode strings in JSX — import from `content.ts`

## Rules

Detailed guidelines in `.claude/rules/` (auto-loaded per file path):

- `project-conventions.md` — Content architecture, SEO, images, form specs, env vars
- `vercel-react-best-practices.md` — Server Components, bundle size, performance
- `web-design-guidelines.md` — Accessibility, forms, touch targets, animations
- `anthropic-frontend-design.md` — Visual identity, typography, color, anti-patterns
