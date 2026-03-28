import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/sections/PageHeader';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { FadeIn } from '@/components/motion/FadeIn';
import { contact } from '@/lib/content';
import { contactMetadata, breadcrumbSchema } from '@/lib/metadata';
import { SchemaScript } from '@/components/ui/SchemaScript';

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema('Contact', 'https://www.stretchfilmadvice.com/contact')} />
      <PageHeader
        overline={contact.header.overline}
        heading={contact.header.heading}
        subtitle={contact.header.subtitle}
        compact
      />
      <Section variant="light" className="py-8 md:py-12">
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
