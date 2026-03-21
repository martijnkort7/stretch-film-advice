---
paths:
  - 'src/**/*.{ts,tsx}'
---

# Vercel React Best Practices

## Server Components (default in App Router)

- Keep components as Server Components unless they need interactivity
- Move `"use client"` to the leaf-most component possible
- Never pass non-serializable props (functions, classes) from Server to Client
- Use `React.cache()` for request-level deduplication in Server Components
- Minimize data passed from Server to Client components (serialization cost)

## Eliminating Waterfalls (CRITICAL)

- Move `await` into branches where actually used (`async-defer-await`)
- Use `Promise.all()` for independent async operations (`async-parallel`)
- Start promises early, await late in API routes (`async-api-routes`)
- Use `<Suspense>` boundaries to stream content progressively

## Bundle Size (CRITICAL)

- Import directly from modules, avoid barrel files (`import { X } from 'lib/X'`)
- Use `next/dynamic` for heavy components not needed on initial load
- Load analytics/logging after hydration
- Preload on hover/focus for perceived speed (`bundle-preload`)

## Performance Patterns

- Use `next/image` for all images with explicit `width`/`height` or `fill`
- Only use `priority` prop on above-fold hero images
- Use route-level `loading.tsx` for loading states
- Use `error.tsx` for error boundaries
- Prefer uncontrolled form inputs where possible

## Re-render Optimization

- Don't subscribe to state only used in callbacks
- Extract expensive work into memoized child components
- Hoist default non-primitive props to module level
- Use primitive dependencies in `useEffect`
- Derive state during render, not in effects
- Use functional `setState` for stable callbacks
- Use `startTransition` for non-urgent updates

## Motion for React

- Import from `motion/react` (NOT `framer-motion`)
- All animated components must be in `"use client"` files
- Use `whileInView` for scroll-triggered animations with `once: true`
- Keep durations 0.3–0.6s with ease or spring physics
- Animate only `transform` and `opacity` (compositor-friendly)
- Respect `prefers-reduced-motion` media query
