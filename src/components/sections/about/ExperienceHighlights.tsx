'use client';

import { Wrench, Layers, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
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
                <motion.div
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex h-full flex-col border border-white/10 p-6 transition-colors duration-300 hover:border-white/30 md:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10 transition-colors duration-300 group-hover:bg-blue-400/20">
                    <Icon
                      className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
