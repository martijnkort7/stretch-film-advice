import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { StorySection } from '@/components/sections/about/StorySection';
import { ExperienceHighlights } from '@/components/sections/about/ExperienceHighlights';
import { WhyDifferent } from '@/components/sections/about/WhyDifferent';
import { CTASection } from '@/components/sections/home/CTASection';
import { about } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Nearly 20 years of pallet wrapping machine experience combined with deep stretch film knowledge. Learn about Egbert Kort and Stretch Film Advice.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        overline={about.header.overline}
        heading={about.header.heading}
        subtitle={about.header.subtitle}
      />
      <StorySection />
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
