'use client';

import { Factory, Package, Truck, Store } from 'lucide-react';
import { motion } from 'motion/react';
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
              <FadeIn key={item.heading} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex h-full flex-col rounded-sm border border-slate-200 p-8 transition-shadow duration-300 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-100">
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-navy-950 text-lg font-semibold">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
