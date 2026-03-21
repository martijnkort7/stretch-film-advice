---
paths:
  - 'src/**/*.{tsx,css}'
---

# Premium Interface Design Guidelines

## Core Principle

Create distinctive, production-grade interfaces that feel bespoke — NOT like a template, NOT like generic corporate, NOT like AI-generated. Every design choice must be intentional.

## Visual Identity for This Project

- Emulates McKinsey.com authority: dark navy backgrounds, generous whitespace, editorial serif headlines, clean sans-serif body
- Color use is restrained — primary navy + white + one accent at a time
- Gradients are subtle (dark-to-slightly-lighter blue), never rainbow or purple
- Photography style: professional/industrial (stretch film, machinery, warehouses)

## Typography as Design

- Headlines are large and commanding (48–72px desktop)
- Serif headlines (Instrument Serif) create editorial gravitas
- Body text clean and readable (Inter, 16–18px)
- Letter spacing slightly tightened on large headlines (`tracking-tight`)
- Hierarchy through size AND weight, not color alone
- Never use: Arial, Roboto, system-ui as primary fonts

## Layout Principles

- Generous padding: sections 96–128px vertical padding on desktop
- Content max-width 1280px, centered
- Asymmetric layouts create interest (60/40, 70/30 splits)
- White space is a design element, not empty space
- Grid-based with occasional grid-breaking elements

## Color Application

- Dominant navy + white with sharp blue accents outperform timid palettes
- Red accent (#C8102E from client brand) used sparingly for emphasis
- Sections alternate light (white) and dark (navy) backgrounds
- On dark: white text with slate-400 for secondary text
- On light: navy-950 text with slate-600 for secondary

## Component Design

- Cards: subtle borders or shadows, never heavy drop shadows
- Buttons: solid fills for primary, outline for secondary, ghost for tertiary
- Dividers: thin (1px) or spacing-based, never thick horizontal rules
- Icons: clean line-icon set (Lucide style), consistently 20–24px

## Animation Philosophy

- Scroll-reveal: fade up 20–30px with opacity, stagger children 100–150ms
- Hover: subtle scale (1.02), color shift, or underline reveal
- Counters: smooth count-up when scrolled into view
- No page transitions needed for 4-page site

## Anti-Patterns — NEVER Use

- Gradient text effects
- Rounded-full buttons (looks SaaS/startup)
- Card carousels or sliders
- Hero with laptop mockup patterns
- Floating blob/mesh gradient backgrounds
- Glassmorphism or excessive blur
- Neon/bright accent colors
- Purple gradients on white backgrounds
- Generic stock photo collages
