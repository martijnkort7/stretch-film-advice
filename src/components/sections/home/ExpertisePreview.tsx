'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { homepage } from '@/lib/content';

export function ExpertisePreview() {
  const { expertise } = homepage;
  const cards = [expertise.advisor, expertise.approach];

  return (
    <Section variant="navy">
      <Container>
        <FadeIn>
          <SectionHeading
            overline={expertise.overline}
            heading="Expertise Meets Experience"
            dark
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <FadeIn key={card.heading} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group rounded-sm border border-white/10 bg-white/5 p-8 md:p-10"
              >
                <h3 className="font-serif text-2xl text-white">
                  {card.heading}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-400">
                  {card.body}
                </p>
                <Link
                  href={card.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                >
                  {card.linkLabel}
                  <span
                    aria-hidden="true"
                    className="transition-colors group-hover:text-red-600"
                  >
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
