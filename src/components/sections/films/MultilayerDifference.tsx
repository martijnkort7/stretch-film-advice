'use client';

import { useState } from 'react';
import Image from 'next/image';
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

export function MultilayerDifference() {
  const { multilayer } = films;
  const [techOpen, setTechOpen] = useState(false);

  return (
    <Section variant="light">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={multilayer.overline}
            heading={multilayer.heading}
            subtitle={multilayer.body}
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-5 lg:items-center lg:gap-16">
          <FadeIn className="lg:col-span-3" direction="left">
            <blockquote className="relative pl-6">
              <span
                className="bg-red-600 absolute top-0 left-0 h-full w-0.5"
                aria-hidden="true"
              />
              <p className="text-navy-950 font-serif text-2xl leading-snug tracking-tight md:text-3xl lg:text-4xl">
                &ldquo;{multilayer.pullQuote}&rdquo;
              </p>
              <footer className="mt-4 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                {multilayer.pullQuoteAttribution}
              </footer>
            </blockquote>
          </FadeIn>

          <FadeIn className="lg:col-span-2" direction="right">
            <figure>
              <div className="overflow-hidden rounded-sm border border-slate-200 bg-slate-50">
                <Image
                  src={multilayer.crossSectionImage}
                  alt={multilayer.crossSectionAlt}
                  width={900}
                  height={620}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">
                {multilayer.crossSectionCaption}
              </figcaption>
            </figure>
          </FadeIn>
        </div>

        <StaggerChildren className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
          {multilayer.benefits.map((benefit) => (
            <StaggerItem key={benefit.heading}>
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-navy-950 font-serif text-2xl tracking-tight md:text-3xl">
                  {benefit.heading}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {benefit.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.1} className="mt-16 lg:mt-20">
          <div className="border border-slate-200 bg-slate-50">
            <button
              type="button"
              aria-expanded={techOpen}
              aria-controls="for-the-technician"
              onClick={() => setTechOpen((v) => !v)}
              className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none md:px-8"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-red-600 uppercase">
                {multilayer.forTechnician.label}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                  techOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {techOpen && (
                <motion.div
                  id="for-the-technician"
                  key="technician-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-slate-200 px-6 py-8 md:px-8 md:py-10">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                      <div className="space-y-5">
                        {multilayer.forTechnician.paragraphs.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-base leading-relaxed text-slate-600"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <figure>
                        <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
                          <Image
                            src={multilayer.forTechnician.strainCurveImage}
                            alt={multilayer.forTechnician.strainCurveAlt}
                            width={900}
                            height={640}
                            sizes="(max-width: 1024px) 100vw, 520px"
                            className="h-auto w-full object-contain"
                          />
                        </div>
                        <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">
                          {multilayer.forTechnician.strainCurveCaption}
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
