'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Accordion.Root type="single" collapsible className="space-y-3">
        {items.map((item, i) => (
          <Accordion.Item
            key={i}
            value={`item-${i}`}
            className="overflow-hidden border border-slate-200 bg-white"
          >
            <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50">
              <span className="pr-8 font-serif text-lg text-navy-950">
                {item.question}
              </span>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </Accordion.Trigger>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.3s_ease-out] data-[state=open]:animate-[accordion-down_0.3s_ease-out]">
              <div className="px-6 pb-5 pt-1 text-base leading-relaxed text-slate-600">
                {item.answer}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
}
