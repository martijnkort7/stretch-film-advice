import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { FadeIn } from '@/components/motion/FadeIn';
import { films } from '@/lib/content';

export function CaseStudyDM() {
  const { caseStudy } = films;

  return (
    <Section variant="navy">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={caseStudy.overline}
            heading={caseStudy.heading}
            dark
          />
        </FadeIn>

        <div className="mt-12 border-y border-slate-700 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <FadeIn
              delay={0.1}
              className="border-b border-slate-700 md:border-r md:border-b-0"
            >
              <figure className="pt-6 pb-7 md:pr-6 lg:pr-10">
                <header className="flex items-baseline gap-4 pb-5">
                  <span className="font-serif text-3xl leading-none text-slate-500 tabular-nums">
                    {caseStudy.beforeIndex}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-red-400 uppercase">
                    {caseStudy.beforeLabel}
                  </span>
                </header>
                <div className="relative aspect-[247/100] overflow-hidden">
                  <Image
                    src={caseStudy.beforeImage}
                    alt={caseStudy.beforeAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="pt-5">
                  <p className="font-sans text-base leading-snug font-medium text-white">
                    {caseStudy.beforeMetaPrimary}
                  </p>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-slate-400">
                    {caseStudy.beforeMetaSecondary}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
            <FadeIn delay={0.25}>
              <figure className="pt-6 pb-7 md:pl-6 lg:pl-10">
                <header className="flex items-baseline gap-4 pb-5">
                  <span className="font-serif text-3xl leading-none text-slate-500 tabular-nums">
                    {caseStudy.afterIndex}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-red-400 uppercase">
                    {caseStudy.afterLabel}
                  </span>
                </header>
                <div className="relative aspect-[247/100] overflow-hidden">
                  <Image
                    src={caseStudy.afterImage}
                    alt={caseStudy.afterAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="pt-5">
                  <p className="font-sans text-base leading-snug font-medium text-white">
                    {caseStudy.afterMetaPrimary}
                  </p>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-slate-400">
                    {caseStudy.afterMetaSecondary}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-5 lg:items-center lg:gap-16">
          <FadeIn className="lg:col-span-2" direction="left">
            <div className="text-white">
              <AnimatedCounter
                value={caseStudy.savings.value}
                prefix={caseStudy.savings.prefix}
                suffix={caseStudy.savings.suffix}
              />
            </div>
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-red-400 uppercase">
              {caseStudy.savings.label}
            </p>
          </FadeIn>

          <FadeIn className="lg:col-span-3" direction="right">
            <p className="text-lg leading-relaxed text-slate-300">
              {caseStudy.intro}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-16">
          <ComparisonTable
            headers={caseStudy.metrics.headers}
            rows={caseStudy.metrics.rows}
            highlightColumn={3}
            variant="dark"
          />
          <p className="mt-6 text-sm leading-relaxed text-slate-400">
            {caseStudy.metricsCaption}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16">
          <div className="grid gap-8 lg:grid-cols-5 lg:items-center lg:gap-12">
            <figure className="lg:col-span-3">
              <div className="overflow-hidden rounded-sm border border-white/10 bg-white">
                <Image
                  src={caseStudy.eumosImage}
                  alt={caseStudy.eumosAlt}
                  width={1280}
                  height={760}
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="h-auto w-full object-contain"
                />
              </div>
            </figure>
            <p className="text-base leading-relaxed text-slate-300 lg:col-span-2">
              {caseStudy.eumosCaption}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-12">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium text-red-400 transition-colors hover:text-red-300 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
          >
            See all 30-63% stretch film savings stories
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
