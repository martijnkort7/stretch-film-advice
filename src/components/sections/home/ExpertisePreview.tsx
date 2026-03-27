'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ClipboardCheck } from 'lucide-react';
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
            heading={expertise.heading}
            dark
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <FadeIn key={card.heading} delay={0.1 + i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group flex h-full flex-col rounded-sm border border-white/10 bg-white/5 p-8 md:p-10"
              >
                <div className="mb-5">
                  {card.icon === 'user' && 'image' in card ? (
                    <Image
                      src={card.image}
                      alt="Egbert Kort"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-400/10">
                      <ClipboardCheck className="h-7 w-7 text-blue-400" />
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-2xl text-white">
                  {card.heading}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-400">
                  {card.body}
                </p>
                <Link
                  href={card.link}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
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
