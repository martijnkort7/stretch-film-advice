# Stretch Film Advice — Website

## Project Overview
Professional 4-page website for Egbert Kort / Stretch Film Advice. Positioned as premium consulting (McKinsey.com visual authority). Egbert sells multilayer stretch film via distributors in 17 European countries and advises on optimal film usage + machine settings, achieving 30-50% film reduction.

## Tech Stack
- **Framework**: Next.js 16 with App Router, TypeScript, React 19
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- **Animations**: Motion for React (`motion/react`)
- **Fonts**: Instrument Serif (headlines) + Inter (body) via `next/font/google`
- **Contact form**: Formspree (env var `NEXT_PUBLIC_FORMSPREE_ID`)
- **Hosting**: Vercel
- **Language**: English only; architecture ready for i18n (German later)

## Commands
- `npm run dev` — Development server (port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npx prettier --write .` — Format code

## Architecture
- Server Components by default; `"use client"` only for: animations, form, mobile nav
- Images in `/public/images/` — always use `next/image`
- Motion components isolated in `src/components/motion/` (all client components)
- All text content in `src/lib/content.ts` as typed constants (i18n-ready)
- Contact form posts to Formspree — no API routes needed
- No CMS — static content in components

## File Organization
```
src/app/                     — Pages (layout.tsx, page.tsx, about/, services/, contact/)
src/components/layout/       — Header, Footer, MobileNav, Navigation
src/components/ui/           — Button, Container, Section, SectionHeading
src/components/motion/       — FadeIn, StaggerChildren, AnimatedCounter
src/components/sections/     — Page-specific sections grouped by page
src/lib/                     — content.ts, metadata.ts, types.ts, utils.ts
```

## Code Style
- Named exports for all components
- Component files: PascalCase.tsx
- Utility files: camelCase.ts
- One component per file
- Props: `interface {ComponentName}Props` in same file
- Tailwind class order: layout → sizing → spacing → typography → colors → effects

## Design System
- **Colors**: Navy (#0A1628–#2A4A73), Blue (#1B4FD8–#3B82F6), Red accent (#C8102E), Slate neutrals
- **Fonts**: Instrument Serif (headlines, 400 weight), Inter (body, variable)
- **Spacing**: Sections py-24 desktop / py-16 mobile, Container max-w-7xl px-6 lg:px-8
- **Sections**: Alternate between light (white) and dark (navy) backgrounds

## Content
- Client: Egbert Kort, ~20 years pallet wrapping machine experience
- USP: Deep machine knowledge + film expertise = 30-50% film reduction
- Tone: Authoritative expert advisor, not salesy. Think management consulting.
- Contact: egbertkort@stretchfilmadvice.com, +31 651571072, LinkedIn

## Rules
Detailed guidelines in `.claude/rules/`:
- `vercel-react-best-practices.md` — React/Next.js performance
- `web-design-guidelines.md` — UI/UX accessibility and quality
- `anthropic-frontend-design.md` — Premium interface design
- `project-conventions.md` — Project-specific patterns
