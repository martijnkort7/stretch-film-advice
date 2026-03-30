'use client';

import { Users, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/motion/StaggerChildren';
import { contact, ui } from '@/lib/content';

const icons = [Users, Building2];

export function AudienceCards() {
  const { audiences } = contact;

  return (
    <div>
      <h2 className="text-navy-950 mb-8 text-center font-serif text-2xl">
        {audiences.heading}
      </h2>

      <StaggerChildren className="grid gap-6 md:grid-cols-2">
        {audiences.cards.map((card, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem key={card.title} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group flex h-full flex-col border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:border-blue-200 hover:shadow-lg md:p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                  <Icon
                    className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-navy-950 font-serif text-xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
                <div className="mt-4 border-l-2 border-blue-200 pl-4">
                  <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">
                    {ui.whatToExpect}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.expectation}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </div>
  );
}
