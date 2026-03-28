import { HeroSection } from '@/components/sections/home/HeroSection';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { ValueProposition } from '@/components/sections/home/ValueProposition';
import { IndustriesSection } from '@/components/sections/home/IndustriesSection';
import { HowWeWorkSection } from '@/components/sections/home/HowWeWorkSection';
import { ExpertisePreview } from '@/components/sections/home/ExpertisePreview';
import { BeforeAfterSection } from '@/components/sections/home/BeforeAfterSection';
import { CTASection } from '@/components/sections/home/CTASection';
import { homeMetadata } from '@/lib/metadata';

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ValueProposition />
      <IndustriesSection />
      <HowWeWorkSection />
      <ExpertisePreview />
      <BeforeAfterSection />
      <CTASection />
    </>
  );
}
