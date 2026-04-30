import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { films } from '@/lib/content';

export function EliteSpotlight() {
  const { elite } = films;

  return (
    <Section variant="light" id="elite">
      <Container>
        <FadeIn>
          <SectionHeading overline={elite.overline} heading={elite.heading} />
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-2" direction="left">
            <p className="text-base leading-relaxed text-slate-600">
              {elite.lead}
            </p>
            <ul className="mt-8 space-y-4 border-t border-slate-200 pt-6">
              {elite.skus.map((sku) => (
                <li key={sku.name} className="flex flex-col">
                  <span className="text-navy-950 font-serif text-xl tracking-tight md:text-2xl">
                    {sku.name}
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-slate-600">
                    {sku.spec}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="lg:col-span-3" direction="right">
            <StaggerChildren className="space-y-4">
              {elite.benefits.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="flex gap-4 border-t border-slate-200 pt-4">
                    <span
                      aria-hidden="true"
                      className="bg-red-600 mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      {benefit}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
