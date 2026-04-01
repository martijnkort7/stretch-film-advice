'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';
import { about } from '@/lib/content';

export function StorySection() {
  return (
    <Section variant="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <div className="flex items-center">
            <FadeIn direction="left">
              <div className="overflow-hidden rounded-sm border border-slate-200">
                <Image
                  src="/images/team/egbert-factory-inspection.webp"
                  alt="Egbert Kort conducting a holding force measurement at a client facility"
                  width={640}
                  height={800}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <blockquote className="relative mt-6 pl-5">
                <motion.div
                  className="absolute top-0 left-0 w-0.5 bg-red-600"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <p className="font-serif text-lg text-slate-700 italic">
                  &ldquo;{about.story.quote}&rdquo;
                </p>
              </blockquote>
            </FadeIn>
          </div>

          {/* Story */}
          <div>
            <FadeIn>
              <h2 className="text-navy-950 font-serif text-3xl tracking-tight md:text-4xl">
                {about.story.heading}
              </h2>
            </FadeIn>
            <div className="mt-8 space-y-6">
              {about.story.paragraphs.map((paragraph, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.05}>
                  <p className="text-base leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
