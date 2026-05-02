import { PageHeader } from '@/components/sections/PageHeader';
import { StorySection } from '@/components/sections/about/StorySection';
import { TimelineSection } from '@/components/sections/about/TimelineSection';
import { ExperienceHighlights } from '@/components/sections/about/ExperienceHighlights';
import { WhyDifferent } from '@/components/sections/about/WhyDifferent';
import { CTASection } from '@/components/sections/home/CTASection';
import { InlineCta } from '@/components/sections/InlineCta';
import { about } from '@/lib/content';
import { aboutMetadata, breadcrumbSchema, personSchema } from '@/lib/metadata';
import { SchemaScript } from '@/components/ui/SchemaScript';

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema(
          'About',
          'https://www.stretchfilmadvice.com/about',
        )}
      />
      <SchemaScript schema={personSchema} />
      <PageHeader
        overline={about.header.overline}
        heading={about.header.heading}
        subtitle={about.header.subtitle}
      />
      <StorySection />
      <TimelineSection />
      <InlineCta
        heading="45 years of pallet wrapping, available to your team."
        body="The same precision that built this track record is one assessment away. Half a day on-site, a written report within a week, no obligation."
      />
      <ExperienceHighlights />
      <WhyDifferent />
      <CTASection
        heading={about.cta.heading}
        subtitle={about.cta.subtitle}
        button={about.cta.button}
      />
    </>
  );
}
