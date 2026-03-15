import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';
import { about } from '@/lib/content';

export function StorySection() {
  return (
    <Section variant="light">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Photo placeholder */}
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <div className="aspect-[4/5] w-full bg-slate-100">
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  Photo of Egbert Kort
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Story */}
          <div className="lg:col-span-3">
            <FadeIn>
              <h2 className="font-serif text-3xl tracking-tight text-navy-950 md:text-4xl">
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
