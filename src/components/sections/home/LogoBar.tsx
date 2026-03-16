import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';
import { homepage } from '@/lib/content';

export function LogoBar() {
  const { logos } = homepage;

  return (
    <section className="border-b border-slate-100 bg-white py-12 md:py-16">
      <Container>
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            {logos.heading}
          </p>
          <div className="mt-8 grid grid-cols-3 items-center gap-8 md:grid-cols-6">
            {logos.items.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 items-center justify-center rounded bg-slate-100 grayscale"
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="text-xs font-medium text-slate-400">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
