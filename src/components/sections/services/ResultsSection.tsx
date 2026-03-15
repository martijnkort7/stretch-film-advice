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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
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
      </Container>
    </Section>
  );
}
