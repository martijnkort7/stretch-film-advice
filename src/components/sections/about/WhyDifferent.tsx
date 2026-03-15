import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { about } from '@/lib/content';
import { cn } from '@/lib/utils';

export function WhyDifferent() {
  const { different } = about;

  return (
    <Section variant="light">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={different.overline}
            heading={different.heading}
            subtitle={different.body}
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {different.points.map((point, i) => {
            const isHighlighted = i === 2;
            return (
              <FadeIn key={point.heading} delay={0.1 + i * 0.1}>
                <div
                  className={cn(
                    'h-full p-8',
                    isHighlighted
                      ? 'bg-navy-950 text-white'
                      : 'border border-slate-200 bg-white',
                  )}
                >
                  <h3
                    className={cn(
                      'font-serif text-xl',
                      isHighlighted ? 'text-white' : 'text-navy-950',
                    )}
                  >
                    {point.heading}
                  </h3>
                  <p
                    className={cn(
                      'mt-4 text-sm leading-relaxed',
                      isHighlighted ? 'text-slate-300' : 'text-slate-600',
                    )}
                  >
                    {point.body}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
