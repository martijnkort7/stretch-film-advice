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
            mobileHeaders={['Metric', 'Before', 'After', 'Improvement']}
            rows={results.rows}
            highlightColumn={3}
          />
        </FadeIn>

        {/* Tilt-Test Section */}
        <div className="mt-20">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                {results.tiltTest.overline}
              </p>
              <h3 className="text-navy-950 font-serif text-2xl md:text-3xl">
                {results.tiltTest.heading}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {results.tiltTest.body}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="overflow-hidden rounded-sm border border-slate-200 shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={results.tiltTest.image}
                    alt={results.tiltTest.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
                  <p className="text-xs leading-relaxed text-slate-600">
                    Current situation: film consumption weighed per pallet
                    on-site
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-sm border border-slate-200 shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/process/current-setting.webp"
                    alt="Wrapping machine control panel showing pre-stretch percentage settings per load zone before optimisation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
                  <p className="text-xs leading-relaxed text-slate-600">
                    Machine settings: second-stretch percentages per wrap zone
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-sm border border-slate-200 shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/process/tilt-test-dupont.webp"
                    alt="Tilt test with DuPont bags on pallet at 26-degree incline, demonstrating containment force"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
                  <p className="text-xs leading-relaxed text-slate-600">
                    26° tilt test with 25kg bags
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-6">
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-600">
              {results.tiltTest.caption}
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
