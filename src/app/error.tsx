'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { errorPage } from '@/lib/content';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-navy-950 flex min-h-screen items-center">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
            {errorPage.code}
          </p>
          <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            {errorPage.heading}
          </h1>
          <p className="mt-6 text-lg text-slate-400">{errorPage.body}</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-sm bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              {errorPage.tryAgain}
            </button>
            <Button href="/" variant="secondary">
              {errorPage.backToHome}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
