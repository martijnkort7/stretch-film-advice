import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { siteConfig, navigation, footer } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-navy-950 py-16 text-white md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Company */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="font-serif">Stretch Film</span>
              <span className="text-red-600"> Advice</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li className="pt-2 text-slate-500">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}
                <br />
                {siteConfig.address.country}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>{footer.copyright}</p>
            <p>KvK: {siteConfig.kvk}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
