import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { FadeIn } from '@/components/motion/FadeIn';
import { about } from '@/lib/content';

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

        <FadeIn delay={0.2} className="mt-16">
          <ComparisonTable
            headers={different.comparison.headers}
            rows={different.comparison.rows}
            highlightColumn={3}
          />
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              See how the process works
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
