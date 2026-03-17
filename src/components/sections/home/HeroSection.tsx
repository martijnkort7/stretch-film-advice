'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { homepage } from '@/lib/content';

export function HeroSection() {
  const { hero } = homepage;

  return (
    <section className="relative flex min-h-screen items-center bg-navy-950">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <Container className="relative z-10 py-24 sm:py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400"
          >
            {hero.overline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl"
          >
            {hero.heading.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:mt-8 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" variant="primary" size="md" className="sm:px-8 sm:py-4">
              {hero.cta}
            </Button>
            <Button href="/services" variant="ghost" size="md" className="sm:px-8 sm:py-4">
              {hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-5 text-sm text-slate-400"
          >
            {hero.ctaSubtext}
          </motion.p>
        </div>
      </Container>

      {/* Crisp bottom edge - no gradient */}
    </section>
  );
}
