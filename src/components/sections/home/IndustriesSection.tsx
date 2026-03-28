import { Factory, Package, Truck, Store } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { StaggerChildren } from '@/components/motion/StaggerChildren';
import { homepage } from '@/lib/content';

const iconMap = {
  factory: Factory,
  package: Package,
  truck: Truck,
  store: Store,
} as const;

export function IndustriesSection() {
  const { industries } = homepage;

  return (
    <Section variant="light">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={industries.overline}
            heading={industries.heading}
            align="center"
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.heading}>
                <div className="rounded-sm border border-slate-200 p-8 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-950">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
