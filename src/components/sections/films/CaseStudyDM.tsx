import Image from 'next/image';
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

        {/* TODO image: DM Hungary before. Pallet wrapped with 17µm standard film, 178g, 9.5kg holding force. ~1200x1500 JPG, /public/images/films/dm-hungary-before.jpg */}
        {/* TODO image: DM Hungary after. Same pallet line wrapped with Nano SE 15µm, 104g, 19kg holding force. ~1200x1500 JPG, /public/images/films/dm-hungary-after.jpg */}

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
      </Container>
    </Section>
  );
}
