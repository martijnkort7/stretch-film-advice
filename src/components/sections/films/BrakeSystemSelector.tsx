'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { films } from '@/lib/content';

function CoreElectronicGlyph() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16"
      aria-hidden="true"
    >
      <ellipse cx="40" cy="22" rx="20" ry="5" />
      <ellipse cx="40" cy="56" rx="20" ry="5" />
      <line x1="20" y1="22" x2="20" y2="56" />
      <line x1="60" y1="22" x2="60" y2="56" />
      <line x1="40" y1="10" x2="40" y2="18" />
      <line x1="34" y1="10" x2="46" y2="10" />
    </svg>
  );
}

function OneMotorGlyph() {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-20"
      aria-hidden="true"
    >
      <circle cx="28" cy="40" r="16" />
      <circle cx="72" cy="40" r="16" />
      <circle cx="28" cy="40" r="6" />
      <circle cx="72" cy="40" r="6" />
      <line x1="34" y1="40" x2="38" y2="40" />
      <line x1="62" y1="40" x2="66" y2="40" />
      <line x1="42" y1="36" x2="58" y2="36" />
      <line x1="42" y1="44" x2="58" y2="44" />
      <line x1="42" y1="36" x2="42" y2="44" />
      <line x1="58" y1="36" x2="58" y2="44" />
    </svg>
  );
}

function TwoMotorGlyph() {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-20"
      aria-hidden="true"
    >
      <rect x="20" y="10" width="16" height="18" />
      <rect x="64" y="10" width="16" height="18" />
      <line x1="28" y1="28" x2="28" y2="34" />
      <line x1="72" y1="28" x2="72" y2="34" />
      <circle cx="28" cy="50" r="14" />
      <circle cx="72" cy="50" r="14" />
    </svg>
  );
}

const glyphs: Record<string, () => React.ReactElement> = {
  'core-electronic': CoreElectronicGlyph,
  '1-motor': OneMotorGlyph,
  '2-motor': TwoMotorGlyph,
};

export function BrakeSystemSelector() {
  const { brakeSystems } = films;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section variant="light" id="brake-systems">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={brakeSystems.overline}
            heading={brakeSystems.heading}
            subtitle={brakeSystems.body}
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8 lg:mt-20">
          {brakeSystems.cards.map((card) => {
            const Glyph = glyphs[card.id];
            const isOpen = openId === card.id;

            return (
              <StaggerItem key={card.id} className="h-full">
                <article className="border-navy-950/[0.08] hover:border-navy-950 flex h-full flex-col border bg-white transition-colors duration-200">
                  <div className="border-b border-slate-100 bg-slate-50 px-6 py-8">
                    <div className="text-navy-950 mb-5">
                      {Glyph && <Glyph />}
                    </div>
                    <h3 className="text-navy-950 font-serif text-xl tracking-tight md:text-2xl">
                      {card.name}
                    </h3>
                    <p className="mt-3 text-xs font-semibold tracking-[0.18em] text-red-600 uppercase tabular-nums">
                      {card.prestretchRange} pre-stretch
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col gap-6 px-6 py-7">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                        How to recognise it
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {card.recognise}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                        Recommended films
                      </p>
                      <ul className="mt-3 space-y-2">
                        {card.recommendedFilms.map((film) => (
                          <li key={film.name} className="flex flex-col">
                            <span className="text-navy-950 text-sm font-medium">
                              {film.name}
                            </span>
                            <span className="text-sm text-slate-500">
                              {film.spec}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-slate-100 pt-5">
                      <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                        The mistake I see most
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 italic">
                        {card.commonMistake}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`mechanism-${card.id}`}
                        onClick={() =>
                          setOpenId((current) =>
                            current === card.id ? null : card.id,
                          )
                        }
                        className="group flex w-full items-center justify-between border-t border-slate-200 pt-4 text-left transition-colors hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
                      >
                        <span className="text-navy-950 text-sm font-medium">
                          See the actual mechanism
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`mechanism-${card.id}`}
                            key="mechanism"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4">
                              <div className="overflow-hidden rounded-sm border border-slate-200 bg-slate-50">
                                <Image
                                  src={card.mechanismImage}
                                  alt={card.mechanismAlt}
                                  width={800}
                                  height={600}
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                  className="h-auto w-full object-contain"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <FadeIn delay={0.1} className="mt-12">
          <div className="border border-dashed border-slate-300 bg-slate-50 px-6 py-6 text-center md:px-8">
            <p className="text-base text-slate-700">
              <span className="text-navy-950 font-medium">
                {brakeSystems.notSurePrompt}
              </span>{' '}
              <Link
                href="/contact"
                className="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-800 hover:underline"
              >
                {brakeSystems.notSureCta}
              </Link>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {brakeSystems.universalFallback}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12">
          <div className="bg-navy-950 px-8 py-12 md:px-16 md:py-16">
            <div className="bg-red-600 mb-6 h-0.5 w-12" />
            <blockquote className="font-serif text-2xl leading-snug tracking-tight text-white md:text-3xl">
              &ldquo;{brakeSystems.closingQuote.text}&rdquo;
            </blockquote>
            <footer className="mt-6 text-xs font-semibold tracking-[0.2em] text-red-400 uppercase">
              {brakeSystems.closingQuote.attribution}
            </footer>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
