'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { homepage } from '@/lib/content';

export function HeroSection() {
  const { hero } = homepage;

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#0b1a2e] md:h-screen">
      <Container className="relative z-10 flex flex-1 flex-col justify-center pt-24 pb-12 md:py-28">
        <div className="grid items-center lg:flex-1 lg:grid-cols-[1.6fr_1fr] lg:items-stretch lg:gap-16">
          {/* LEFT COLUMN — text content */}
          <div className="lg:self-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15 hidden md:block lg:hidden">
                <Image
                  src="/images/team/egbert-kort.webp"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover object-[center_top]"
                />
              </div>
              <p className="text-xs font-semibold tracking-[0.25em] text-red-400 uppercase">
                {hero.overline}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {hero.heading}
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
              className="mt-6 sm:mt-10"
            >
              {/* Mobile: rectangular buttons */}
              <div className="flex flex-col gap-4 sm:hidden">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button href="/contact" variant="primary" size="lg">
                    {hero.cta}
                  </Button>
                </motion.div>
                <Button href="/services" variant="ghost" size="lg">
                  {hero.ctaSecondary}
                </Button>
              </div>

              {/* Desktop: pill buttons with sliding icon animation */}
              <div className="hidden gap-4 sm:flex sm:flex-row">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex h-14 cursor-pointer items-center overflow-hidden rounded-full bg-blue-500 p-1 ps-7 pe-16 text-base font-medium text-white transition-all duration-500 hover:bg-white hover:ps-16 hover:pe-7 hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <span className="relative z-10 transition-all duration-500">
                      {hero.cta}
                    </span>
                    <div className="absolute right-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-500 transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45 group-hover:bg-emerald-500 group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                </motion.div>
                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-10 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-8 text-xs tracking-widest text-gray-400 uppercase"
            >
              {hero.trustLine}
            </motion.p>
          </div>

          {/* RIGHT COLUMN — portrait, desktop only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <Image
              src="/images/team/egbert-kort.webp"
              alt="Egbert Kort — stretch film consultant"
              fill
              priority
              unoptimized
              className="object-cover object-[center_top]"
              style={{
                opacity: 0.95,
                filter: 'saturate(0.92) brightness(1.02)',
                maskImage:
                  'linear-gradient(to right, transparent 0%, black 12%, black 100%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, black 12%, black 100%)',
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
