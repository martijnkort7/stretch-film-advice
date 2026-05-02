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

        <FadeIn delay={0.1} className="mt-12 lg:mt-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <figure>
              <div className="overflow-hidden rounded-sm border border-white/10 bg-white">
                <Image
                  src={caseStudy.beforeImage}
                  alt={caseStudy.beforeAlt}
                  width={1535}
                  height={594}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-slate-400">
                {caseStudy.beforeCaption}
              </figcaption>
            </figure>
            <figure>
              <div className="overflow-hidden rounded-sm border border-white/10 bg-white">
                <Image
                  src={caseStudy.afterImage}
                  alt={caseStudy.afterAlt}
                  width={1998}
                  height={809}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-slate-400">
                {caseStudy.afterCaption}
              </figcaption>
            </figure>
          </div>
        </FadeIn>

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
