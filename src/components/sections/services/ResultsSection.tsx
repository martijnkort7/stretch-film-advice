import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { FadeIn } from '@/components/motion/FadeIn';
import { services } from '@/lib/content';

export function ResultsSection() {
  const { results } = services;

  return (
    <Section variant="light">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={results.overline}
            heading={results.heading}
            subtitle={results.subtitle}
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16">
          <ComparisonTable
            headers={results.headers}
            rows={results.rows}
            highlightColumn={3}
          />
        </FadeIn>

        {/* Tilt-Test Section */}
        <div className="mt-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {results.tiltTest.overline}
              </p>
              <h3 className="font-serif text-2xl text-navy-950 md:text-3xl">
                {results.tiltTest.heading}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {results.tiltTest.body}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-10">
            <div className="mx-auto max-w-lg overflow-hidden rounded-sm border border-slate-200 shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={results.tiltTest.image}
                  alt={results.tiltTest.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-slate-100 bg-slate-50 p-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  {results.tiltTest.caption}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
