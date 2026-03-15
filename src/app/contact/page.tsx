import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { FadeIn } from '@/components/motion/FadeIn';
import { contact } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Stretch Film Advice for expert consultation on stretch film optimisation, machine settings, and cost reduction across Europe.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        overline={contact.header.overline}
        heading={contact.header.heading}
        subtitle={contact.header.subtitle}
      />
      <Section variant="light" className="py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-5 lg:gap-20">
            <FadeIn direction="up" className="lg:col-span-3">
              <ContactForm />
            </FadeIn>
            <FadeIn direction="up" delay={0.15} className="lg:col-span-2">
              <ContactInfo />
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
