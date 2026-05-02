import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/motion/FadeIn';
import { ui } from '@/lib/content';

interface InlineCtaProps {
  heading: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
}

export function InlineCta({
  heading,
  body,
  buttonLabel = ui.primaryCta,
  href = '/contact',
}: InlineCtaProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <FadeIn>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-10 text-center md:flex-row md:items-center md:justify-between md:gap-10 md:text-left">
            <div className="md:flex-1">
              <h3 className="font-serif text-2xl leading-tight tracking-tight text-navy-950 md:text-3xl">
                {heading}
              </h3>
              {body && (
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {body}
                </p>
              )}
            </div>
            <div className="shrink-0">
              <Button href={href} variant="primary" size="md">
                {buttonLabel}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
