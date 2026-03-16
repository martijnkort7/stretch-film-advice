import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { FadeIn } from '@/components/motion/FadeIn';
import { services } from '@/lib/content';

export function FAQSection() {
  const { faq } = services;

  return (
    <Section variant="light" className="pt-0 md:pt-0">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={faq.overline}
            heading={faq.heading}
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.2} className="mx-auto mt-16 max-w-3xl">
          <FAQAccordion items={faq.items} />
        </FadeIn>
      </Container>
    </Section>
  );
}
