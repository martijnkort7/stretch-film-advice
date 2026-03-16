import { Users, Building2 } from 'lucide-react';
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
      <h2 className="mb-8 text-center font-serif text-2xl text-navy-950">
        {audiences.heading}
      </h2>

      <StaggerChildren className="grid gap-6 md:grid-cols-2">
        {audiences.cards.map((card, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem key={card.title}>
              <div className="h-full border border-slate-200 bg-white p-6 md:p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-navy-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
                <div className="mt-4 border-l-2 border-blue-200 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {ui.whatToExpect}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.expectation}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </div>
  );
}
