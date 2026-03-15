import { HeroSection } from '@/components/sections/home/HeroSection';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { ValueProposition } from '@/components/sections/home/ValueProposition';
import { ExpertisePreview } from '@/components/sections/home/ExpertisePreview';
import { CTASection } from '@/components/sections/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ValueProposition />
      <ExpertisePreview />
      <CTASection />
    </>
  );
}
