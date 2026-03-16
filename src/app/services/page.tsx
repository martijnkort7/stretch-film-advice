import { PageHeader } from '@/components/sections/PageHeader';
import { ProcessSection } from '@/components/sections/services/ProcessSection';
import { ServiceCards } from '@/components/sections/services/ServiceCards';
import { ResultsSection } from '@/components/sections/services/ResultsSection';
import { FAQSection } from '@/components/sections/services/FAQSection';
import { CTASection } from '@/components/sections/home/CTASection';
import { services } from '@/lib/content';
import { servicesMetadata } from '@/lib/metadata';

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        overline={services.header.overline}
        heading={services.header.heading}
        subtitle={services.header.subtitle}
      />
      <ProcessSection />
      <ServiceCards />
      <ResultsSection />
      <FAQSection />
      <CTASection
        heading={services.cta.heading}
        subtitle={services.cta.subtitle}
        button={services.cta.button}
      />
    </>
  );
}
