# Project Conventions — Stretch Film Advice

## Content Architecture
All page text is stored in `src/lib/content.ts` as typed constants.
This enables future i18n by swapping content objects per locale.
Components import from content.ts — never hardcode English strings in JSX.

## Component Naming
- Layout: Header, Footer, MobileNav, Navigation
- Sections: HeroSection, StatsSection, ProcessSection, etc.
- UI primitives: Button, Container, Section, SectionHeading
- Motion wrappers: FadeIn, StaggerChildren, AnimatedCounter

## Image Handling
- All images in `/public/images/`
- Use `next/image` with explicit dimensions
- Hero images: `priority={true}`
- All others: lazy loaded (default)
- Placeholder images: use solid color placeholders until real photos arrive

## SEO
- Each page exports `metadata` via Next.js Metadata API
- JSON-LD `LocalBusiness` schema on homepage
- Canonical URLs per page
- Open Graph image (1200x630) for social sharing
- `robots.txt` in `/public/`

## Contact Form
- Client component with local state (`useState`)
- Posts to Formspree endpoint via `NEXT_PUBLIC_FORMSPREE_ID` env var
- Fields: name (required), email (required), company (required), phone (optional), message (required)
- Client-side validation before submission
- Success/error states with clear user feedback
- Accessible: labels, error messages linked to inputs, focus management

## Environment Variables
```
NEXT_PUBLIC_FORMSPREE_ID=   # Formspree form endpoint ID
```
