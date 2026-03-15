import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { ProcessSection } from '@/components/sections/services/ProcessSection';
import { ServiceCards } from '@/components/sections/services/ServiceCards';
import { ResultsSection } from '@/components/sections/services/ResultsSection';
import { CTASection } from '@/components/sections/home/CTASection';
import { services } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'From assessment to optimisation: film selection advisory, machine optimisation, on-site audits, training, and troubleshooting for stretch film users across Europe.',
};

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
      <CTASection
        heading={services.cta.heading}
        subtitle={services.cta.subtitle}
        button={services.cta.button}
      />
    </>
  );
}
