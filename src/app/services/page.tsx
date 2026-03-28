import { PageHeader } from '@/components/sections/PageHeader';
import { ProcessSection } from '@/components/sections/services/ProcessSection';
import { ServiceCards } from '@/components/sections/services/ServiceCards';
import { ResultsSection } from '@/components/sections/services/ResultsSection';
import { VideoShowcase } from '@/components/sections/services/VideoShowcase';
import { FAQSection } from '@/components/sections/services/FAQSection';
import { CTASection } from '@/components/sections/home/CTASection';
import { services } from '@/lib/content';
import { servicesMetadata, breadcrumbSchema, faqSchema } from '@/lib/metadata';

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              'Services',
              'https://www.stretchfilmadvice.com/services',
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <PageHeader
        overline={services.header.overline}
        heading={services.header.heading}
        subtitle={services.header.subtitle}
      />
      <ProcessSection />
      <ServiceCards />
      <ResultsSection />
      <VideoShowcase />
      <FAQSection />
      <CTASection
        heading={services.cta.heading}
        subtitle={services.cta.subtitle}
        button={services.cta.button}
      />
    </>
  );
}
