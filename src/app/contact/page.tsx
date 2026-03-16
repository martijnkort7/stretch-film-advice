import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { AudienceCards } from '@/components/sections/contact/AudienceCards';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { FadeIn } from '@/components/motion/FadeIn';
import { contact } from '@/lib/content';
import { contactMetadata } from '@/lib/metadata';

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        overline={contact.header.overline}
        heading={contact.header.heading}
        subtitle={contact.header.subtitle}
      />
      <Section variant="light" className="py-12 md:py-20">
        <Container>
          <AudienceCards />

          <div className="mt-12 grid items-start gap-16 md:mt-16 lg:grid-cols-5 lg:gap-20">
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
