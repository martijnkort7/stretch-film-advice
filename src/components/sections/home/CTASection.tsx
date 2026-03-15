import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';
import { homepage } from '@/lib/content';

export function CTASection() {
  const { cta } = homepage;

  return (
    <Section variant="light" className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy-950 md:text-5xl">
              {cta.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {cta.subtitle}
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary" size="lg">
                {cta.button}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
