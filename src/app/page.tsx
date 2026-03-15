import { HeroSection } from '@/components/sections/home/HeroSection';
import { LogoBar } from '@/components/sections/home/LogoBar';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { ValueProposition } from '@/components/sections/home/ValueProposition';
import { ExpertisePreview } from '@/components/sections/home/ExpertisePreview';
import { CTASection } from '@/components/sections/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <StatsSection />
      <ValueProposition />
      <ExpertisePreview />
      <CTASection />
    </>
  );
}
