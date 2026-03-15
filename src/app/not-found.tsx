import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-navy-950">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            404
          </p>
          <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-10">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
