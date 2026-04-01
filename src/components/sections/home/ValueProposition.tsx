import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { homepage } from '@/lib/content';

export function ValueProposition() {
  const { value } = homepage;

  return (
    <Section variant="dark">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <FadeIn>
              <SectionHeading
                overline={value.overline}
                heading={value.heading}
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {value.body}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="mt-8 space-y-6">
                {value.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="shrink-0 font-serif text-4xl leading-none text-red-600">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-slate-700">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href="/case-studies"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
              >
                See real results from client assessments
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="overflow-hidden rounded-sm border border-white/10">
                <Image
                  src="/images/process/film-usage-comparison.webp"
                  alt="Before and after film usage comparison — the larger ball represents excessive film use, the smaller ball shows optimised usage with less material"
                  width={1920}
                  height={1080}
                  className="w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
