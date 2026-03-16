import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { FadeIn } from '@/components/motion/FadeIn';
import { homepage } from '@/lib/content';

export function BeforeAfterSection() {
  const { beforeAfter } = homepage;

  return (
    <Section variant="dark">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={beforeAfter.overline}
            heading={beforeAfter.heading}
            subtitle={beforeAfter.subtitle}
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16">
          <ComparisonTable
            headers={beforeAfter.headers}
            rows={beforeAfter.rows}
            highlightColumn={3}
          />
        </FadeIn>
      </Container>
    </Section>
  );
}
