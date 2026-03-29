'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from 'motion/react';
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

// Leading padding = Container's px-6 = 24px
const SCROLL_LEADING = 24;

function getSessionFlag(key: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

function setSessionFlag(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(key, '1');
  } catch {
    // private browsing may throw QuotaExceededError
  }
}

export function CaseStudySlider() {
  const cases = results.cases.filter((c) => c.metrics.filmBefore !== 'TBD');
  const { slider } = results;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Mobile peek carousel refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const programmaticScrollRef = useRef(false);

  // Swipe hint state
  const hasNudgedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const [showSwipeLabel, setShowSwipeLabel] = useState(false);
  const swipeLabelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Desktop drag handler
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

  // Sync activeIndex → mobile scroll position (triggered by dot/arrow navigation)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || el.offsetWidth === 0) return;
    const card = el.children[activeIndex] as HTMLElement;
    if (!card) return;
    const targetLeft = card.offsetLeft - SCROLL_LEADING;
    if (Math.abs(targetLeft - el.scrollLeft) < 2) {
      programmaticScrollRef.current = false;
      return;
    }
    programmaticScrollRef.current = true;
    el.scrollTo({ left: targetLeft, behavior: 'smooth' });
  }, [activeIndex]);

  // Sync mobile scroll position → activeIndex (triggered by native swipe)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollFallbackTimer: ReturnType<typeof setTimeout>;

    const syncIndex = () => {
      if (programmaticScrollRef.current) {
        programmaticScrollRef.current = false;
        return;
      }
      const scrollLeft = el.scrollLeft;
      let bestIdx = 0;
      let minDiff = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const offset = (child as HTMLElement).offsetLeft - SCROLL_LEADING;
        const diff = Math.abs(offset - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          bestIdx = i;
        }
      });
      if (bestIdx !== activeIndex) {
        programmaticScrollRef.current = true;
        goTo(bestIdx);
      }
      // Dismiss swipe label on first user swipe
      setShowSwipeLabel(false);
      if (swipeLabelTimerRef.current) clearTimeout(swipeLabelTimerRef.current);
    };

    const supportsScrollEnd = 'onscrollend' in window;
    const container: HTMLDivElement = el;

    if (supportsScrollEnd) {
      container.addEventListener('scrollend', syncIndex);
    } else {
      // Fallback: debounced scroll event
      const handleScroll = () => {
        clearTimeout(scrollFallbackTimer);
        scrollFallbackTimer = setTimeout(syncIndex, 150);
      };
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      container.removeEventListener('scrollend', syncIndex);
      container.removeEventListener('scroll', syncIndex);
      clearTimeout(scrollFallbackTimer);
    };
  }, [activeIndex, goTo]);

  // Swipe hint nudge — scroll peek animation, plays once per session
  useEffect(() => {
    if (prefersReducedMotion || hasNudgedRef.current || getSessionFlag('caseStudyNudgeSeen')) {
      return;
    }

    const timer = setTimeout(async () => {
      if (hasNudgedRef.current) return; // StrictMode guard
      const el = scrollRef.current;
      if (!el || el.offsetWidth === 0) return; // Desktop: skip

      hasNudgedRef.current = true;
      setSessionFlag('caseStudyNudgeSeen');
      setShowSwipeLabel(true);

      // Nudge: reveal 40px of next card then snap back
      programmaticScrollRef.current = true;
      el.scrollTo({ left: 40, behavior: 'smooth' });
      await new Promise((r) => setTimeout(r, 450));
      el.scrollTo({ left: 0, behavior: 'smooth' });
      await new Promise((r) => setTimeout(r, 500));
      programmaticScrollRef.current = false;
    }, 1200);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  // Auto-dismiss swipe label after 2.5s
  useEffect(() => {
    if (!showSwipeLabel) return;
    swipeLabelTimerRef.current = setTimeout(() => setShowSwipeLabel(false), 2500);
    return () => {
      if (swipeLabelTimerRef.current) clearTimeout(swipeLabelTimerRef.current);
    };
  }, [showSwipeLabel]);

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

          {/* ── MOBILE LAYOUT ── */}
          <div className="md:hidden">

            {/* Peek image carousel — extends to screen edges with -mx-6 */}
            <div className="-mx-6">
              <div
                ref={scrollRef}
                className="flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'auto',
                  paddingLeft: `${SCROLL_LEADING}px`,
                  paddingRight: '20vw', // trailing space so last card can snap
                  scrollPaddingLeft: `${SCROLL_LEADING}px`,
                }}
              >
                {cases.map((c, i) => {
                  const CardIcon = industryIcons[c.industry] || Factory;
                  return (
                    <div
                      key={c.id}
                      className="relative aspect-[16/9] flex-none overflow-hidden rounded-sm"
                      style={{
                        width: '80vw',
                        scrollSnapAlign: 'start',
                        marginRight: i < cases.length - 1 ? '12px' : '0',
                      }}
                    >
                      {c.image ? (
                        <Image
                          src={c.image}
                          alt={c.imageAlt}
                          fill
                          className="object-cover"
                          style={{ objectPosition: c.imagePosition ?? 'center' }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-950 to-navy-800">
                          <CardIcon
                            className="h-16 w-16 text-slate-600/40"
                            strokeWidth={1}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile text content */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeCase.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="mt-5 flex flex-col"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
                  {slider.caseLabel} {activeIndex + 1} {slider.ofLabel}{' '}
                  {cases.length}
                </p>

                <h3 className="mt-2 font-serif text-xl leading-tight tracking-tight text-navy-950">
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

          {/* ── DESKTOP LAYOUT ── */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ touchAction: 'pan-y' }}
            className="hidden cursor-grab md:block active:cursor-grabbing"
          >
            <div className="grid grid-cols-2 gap-10">
              {/* Desktop image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
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

              {/* Desktop text content */}
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

                  <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-navy-950">
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

          {/* ── NAVIGATION BAR ── */}
          <div className="mt-6 border-t border-slate-200 pt-5">

            {/* Mobile navigation */}
            <div className="flex items-center justify-between md:hidden">
              <div className="flex flex-col items-start gap-2">
                {/* Pill dots */}
                <div
                  className="flex items-center gap-1.5"
                  role="tablist"
                  aria-label="Case study navigation"
                >
                  {cases.map((c, i) => (
                    <button
                      key={c.id}
                      role="tab"
                      aria-selected={i === activeIndex}
                      aria-label={`${slider.caseLabel} ${i + 1}: ${c.title}`}
                      onClick={() => goTo(i)}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        i === activeIndex ? 'w-6 bg-navy-950' : 'w-2 bg-slate-300',
                      )}
                    />
                  ))}
                </div>

                {/* Swipe affordance label */}
                <AnimatePresence>
                  {showSwipeLabel && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                      className="flex select-none items-center gap-1 text-xs text-slate-400"
                    >
                      <ChevronLeft className="h-3 w-3" />
                      {slider.swipeLabel}
                      <ChevronRight className="h-3 w-3" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Arrow buttons (mobile) */}
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  aria-label={slider.previousCase}
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-sm border border-slate-200 transition-colors duration-200',
                    activeIndex === 0 ? 'cursor-not-allowed opacity-30' : 'active:bg-white',
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
                      : 'active:bg-white',
                  )}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden items-center justify-between md:flex">
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

              {/* Arrow buttons (desktop) */}
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  aria-label={slider.previousCase}
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-sm border border-slate-200 transition-colors duration-200',
                    activeIndex === 0 ? 'cursor-not-allowed opacity-30' : 'hover:bg-white',
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
        </div>
      </Container>
    </Section>
  );
}
