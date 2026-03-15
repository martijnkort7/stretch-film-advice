import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { services } from '@/lib/content';
import { cn } from '@/lib/utils';

export function ResultsSection() {
  const { results } = services;

  return (
    <Section variant="light">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={results.overline}
            heading={results.heading}
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="grid h-full gap-8 md:grid-cols-2">
              {[results.before, results.after].map((column, i) => {
                const isAfter = i === 1;
                return (
                  <FadeIn key={column.heading} delay={i * 0.15}>
                    <div
                      className={cn(
                        'h-full p-8 md:p-10',
                        isAfter
                          ? 'bg-navy-950 text-white'
                          : 'border border-slate-200 bg-white',
                      )}
                    >
                      <h3
                        className={cn(
                          'text-xs font-semibold uppercase tracking-[0.2em]',
                          isAfter ? 'text-blue-400' : 'text-slate-500',
                        )}
                      >
                        {column.heading}
                      </h3>
                      <ul className="mt-6 space-y-4">
                        {column.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span
                              className={cn(
                                'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
                                isAfter ? 'bg-blue-400' : 'bg-slate-300',
                              )}
                            />
                            <span
                              className={cn(
                                'text-base leading-relaxed',
                                isAfter ? 'text-slate-300' : 'text-slate-600',
                              )}
                            >
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <FadeIn delay={0.3}>
              <div className="flex h-full flex-col overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/26 degree test with plastic cans.jpeg"
                    alt="26 degree tilt test for pallet stability"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="border-t border-slate-100 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
                  Load stability validation: A 26-degree tilt test
                  demonstrating maximum containment force after film and machine
                  optimisation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
