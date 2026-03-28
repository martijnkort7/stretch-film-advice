import { PageHeader } from '@/components/sections/PageHeader';
import { StorySection } from '@/components/sections/about/StorySection';
import { TimelineSection } from '@/components/sections/about/TimelineSection';
import { ExperienceHighlights } from '@/components/sections/about/ExperienceHighlights';
import { WhyDifferent } from '@/components/sections/about/WhyDifferent';
import { CTASection } from '@/components/sections/home/CTASection';
import { about } from '@/lib/content';
import { aboutMetadata, breadcrumbSchema } from '@/lib/metadata';
import { SchemaScript } from '@/components/ui/SchemaScript';

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema('About', 'https://www.stretchfilmadvice.com/about')} />
      <PageHeader
        overline={about.header.overline}
        heading={about.header.heading}
        subtitle={about.header.subtitle}
      />
      <StorySection />
      <TimelineSection />
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
