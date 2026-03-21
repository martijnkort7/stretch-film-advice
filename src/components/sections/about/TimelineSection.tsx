'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { about } from '@/lib/content';

export function TimelineSection() {
  const { timeline } = about;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-25%' });

  return (
    <Section variant="dark">
      <Container>
        <SectionHeading heading={timeline.heading} align="center" />

        <div ref={ref} className="relative mt-16">
          {/* Desktop: horizontal layout */}
          <div className="hidden md:block">
            {/* Horizontal draw line */}
            <div
              className="relative mx-auto"
              style={{ width: 'calc(100% - 8rem)' }}
            >
              <div className="absolute top-0 right-0 left-0 h-0.5 bg-slate-200" />
              <motion.div
                className="absolute top-0 left-0 h-0.5 origin-left bg-blue-400"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%' }}
              />
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-4 gap-6">
              {timeline.items.map((item, i) => (
                <div key={item.year} className="relative pt-8 text-center">
                  {/* Circle marker */}
                  <motion.div
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: 0.8 + i * 0.8,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="h-5 w-5 rounded-full border-4 border-blue-400 bg-white" />
                  </motion.div>

                  {/* Text content */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                    }
                    transition={{
                      delay: 1.1 + i * 0.8,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="inline-block rounded bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {item.year}
                    </span>
                    <h3 className="text-navy-950 mt-3 font-serif text-lg">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical layout */}
          <div className="md:hidden">
            <div className="relative pl-8">
              {/* Vertical draw line */}
              <div className="absolute top-0 bottom-0 left-[9px] w-0.5 bg-slate-200" />
              <motion.div
                className="absolute top-0 left-[9px] w-0.5 origin-top bg-blue-400"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: '100%' }}
              />

              <div className="space-y-10">
                {timeline.items.map((item, i) => (
                  <div key={item.year} className="relative">
                    {/* Circle marker */}
                    <motion.div
                      className="absolute top-1 -left-8"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        delay: 0.5 + i * 0.5,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <div className="h-5 w-5 rounded-full border-4 border-blue-400 bg-white" />
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                      }
                      transition={{
                        delay: 0.8 + i * 0.5,
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span className="inline-block rounded bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {item.year}
                      </span>
                      <h3 className="text-navy-950 mt-2 font-serif text-lg">
                        {item.label}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
