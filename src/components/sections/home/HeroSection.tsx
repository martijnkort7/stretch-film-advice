'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import { homepage } from '@/lib/content';

export function HeroSection() {
  const { hero } = homepage;

  return (
    <section className="relative flex min-h-[85vh] min-h-[85dvh] overflow-hidden bg-black md:min-h-screen md:items-center">
      {/* Dark overlay for beam contrast */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated background beams */}
      <BackgroundBeams />

      <Container className="relative z-10 pt-28 pb-12 sm:py-32 md:py-40">
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
            className="mt-10"
          >
            {/* Mobile: rectangular buttons */}
            <div className="flex flex-col gap-4 sm:hidden">
              <Button href="/contact" variant="primary" size="lg">
                {hero.cta}
              </Button>
              <Button href="/services" variant="ghost" size="lg">
                {hero.ctaSecondary}
              </Button>
            </div>

            {/* Desktop: pill buttons with sliding icon animation */}
            <div className="hidden gap-4 sm:flex sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex h-14 cursor-pointer items-center overflow-hidden rounded-full bg-blue-600 p-1 ps-7 pe-16 text-base font-medium text-white transition-all duration-500 hover:bg-red-700 hover:pe-7 hover:ps-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <span className="relative z-10 transition-all duration-500">
                  {hero.cta}
                </span>
                <div className="absolute right-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45 group-hover:text-red-700">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-10 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
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
