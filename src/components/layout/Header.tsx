'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';
import { navigation, ui } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
          showSolid
            ? 'bg-white/95 shadow-sm backdrop-blur-sm'
            : 'bg-transparent',
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              onClick={() => {
                if (isHome) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={cn(
                'shrink-0 transition-all duration-300',
                showSolid ? '' : 'rounded-lg bg-white px-3 py-1.5 shadow-sm',
              )}
            >
              <Image
                src="/images/logo.png"
                alt="Stretch Film Advice"
                width={220}
                height={60}
                priority
                className={cn('h-10 md:h-14 w-auto', showSolid && 'mix-blend-multiply')}
              />
            </Link>

            <nav
              className="hidden items-center gap-8 md:flex"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={cn(
                    'rounded-sm border-b-2 text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none',
                    pathname === item.href
                      ? showSolid
                        ? 'border-red-600 text-red-700'
                        : 'border-red-600 text-white'
                      : showSolid
                        ? 'border-transparent text-slate-600 hover:text-red-600'
                        : 'border-transparent text-white/80 hover:text-white',
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href="/contact"
                variant={showSolid ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {ui.getInTouch}
              </Button>
            </nav>

            <button
              className={cn(
                'flex flex-col gap-1.5 rounded-sm p-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none md:hidden',
                showSolid ? 'text-navy-950' : 'text-white',
              )}
              onClick={() => setMobileOpen(true)}
              aria-label={ui.openMenu}
            >
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
