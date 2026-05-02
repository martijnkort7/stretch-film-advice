import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';
import { homepage } from '@/lib/content';

export function TestimonialsSection() {
  return (
    <Section variant="light" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-red-600 uppercase">
              {homepage.testimonials.overline}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-navy-950 md:text-4xl">
              {homepage.testimonials.heading}
            </h2>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {homepage.testimonials.items.map((item, i) => (
            <FadeIn key={item.name + item.country} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <blockquote className="flex-1">
                  <p className="text-base leading-relaxed text-slate-700">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4 text-sm">
                  <span className="block font-semibold text-navy-950">
                    {item.name}
                  </span>
                  <span className="block text-slate-500">
                    {item.company} &middot; {item.country}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
