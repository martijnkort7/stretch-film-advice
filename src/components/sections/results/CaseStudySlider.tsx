'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'motion/react';
import { ChevronLeft, ChevronRight, Store, Factory, Truck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { results } from '@/lib/content';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { ElementType } from 'react';

const industryIcons: Record<string, ElementType> = {
  'Retail / FMCG': Store,
  Manufacturing: Factory,
  Logistics: Truck,
};

const SWIPE_THRESHOLD = 50;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

export function CaseStudySlider() {
  const cases = results.cases.filter((c) => c.metrics.filmBefore !== 'TBD');
  const { slider } = results;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeCase = cases[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const goPrev = useCallback(() => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    if (activeIndex < cases.length - 1) goTo(activeIndex + 1);
  }, [activeIndex, cases.length, goTo]);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < -SWIPE_THRESHOLD && activeIndex < cases.length - 1) {
        goNext();
      } else if (info.offset.x > SWIPE_THRESHOLD && activeIndex > 0) {
        goPrev();
      }
    },
    [activeIndex, cases.length, goNext, goPrev],
  );

  const Icon = industryIcons[activeCase.industry] || Factory;

  return (
    <Section variant="dark">
      <Container>
        <SectionHeading
          overline={slider.overline}
          heading={slider.heading}
          align="center"
        />

        <div className="mt-10 md:mt-14">
          {/* Swipeable slider area */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ touchAction: 'pan-y' }}
            className="cursor-grab active:cursor-grabbing"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
              {/* Image panel */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm md:aspect-[4/3]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeCase.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                    className="absolute inset-0"
                  >
                    {activeCase.image ? (
                      <Image
                        src={activeCase.image}
                        alt={activeCase.imageAlt}
                        fill
                        className="object-cover"
                        style={{ objectPosition: activeCase.imagePosition ?? 'center' }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-950 to-navy-800">
                        <Icon
                          className="h-16 w-16 text-slate-600/40"
                          strokeWidth={1}
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content panel */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeCase.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="flex flex-col justify-center"
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
                    {slider.caseLabel} {activeIndex + 1} {slider.ofLabel}{' '}
                    {cases.length}
                  </p>

                  <h3 className="mt-2 font-serif text-xl leading-tight tracking-tight text-navy-950 md:text-3xl">
                    {activeCase.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-sm bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                      {activeCase.industry}
                    </span>
                    <span className="rounded-sm bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {activeCase.country}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">
                        {slider.challengeLabel}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {activeCase.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">
                        {slider.solutionLabel}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {activeCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Metrics 2x2 */}
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-200 pt-5">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">
                        {slider.beforeLabel}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {activeCase.metrics.filmBefore}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">
                        {slider.afterLabel}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {activeCase.metrics.filmAfter}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">
                        {slider.savingsLabel}
                      </p>
                      <p className="mt-1 font-serif text-lg text-blue-600">
                        {activeCase.metrics.savingsPercent}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">
                        {slider.stabilityLabel}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {activeCase.metrics.palletStability}
                      </p>
                    </div>
                  </div>

                  {activeCase.quote && (
                    <blockquote className="mt-5 border-l-2 border-blue-400 pl-4">
                      <p className="text-sm leading-relaxed text-slate-600 italic">
                        &ldquo;{activeCase.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation bar */}
          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
            {/* Numbered tabs */}
            <div className="flex gap-2">
              {cases.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => goTo(i)}
                  aria-label={`${slider.caseLabel} ${i + 1}: ${c.title}`}
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-sm text-sm font-medium transition-colors duration-200',
                    i === activeIndex
                      ? 'bg-navy-950 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100',
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-label={slider.previousCase}
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-sm border border-slate-200 transition-colors duration-200',
                  activeIndex === 0
                    ? 'cursor-not-allowed opacity-30'
                    : 'hover:bg-white',
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                disabled={activeIndex === cases.length - 1}
                aria-label={slider.nextCase}
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-sm border border-slate-200 transition-colors duration-200',
                  activeIndex === cases.length - 1
                    ? 'cursor-not-allowed opacity-30'
                    : 'hover:bg-white',
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
