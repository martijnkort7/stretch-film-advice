import { Wrench, Layers, Globe, TrendingUp } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { about } from '@/lib/content';

const icons = [Wrench, Layers, Globe, TrendingUp];

export function ExperienceHighlights() {
  return (
    <Section variant="navy">
      <Container>
        <SectionHeading
          overline={about.highlightsSection.overline}
          heading={about.highlightsSection.heading}
          dark
          align="center"
        />

        <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {about.highlights.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={item.heading} className="h-full">
                <div className="h-full border border-white/10 p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10">
                    <Icon
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
