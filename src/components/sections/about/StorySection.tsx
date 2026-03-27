import Image from 'next/image';
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
                  src="/images/egbert-factory-inspection.webp"
                  alt="Egbert Kort conducting a holding force measurement at a client facility"
                  width={640}
                  height={800}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <blockquote className="mt-6 border-l-2 border-red-600 pl-5">
                <p className="font-serif text-lg italic text-slate-700">
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
