'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';
import { navigation, siteConfig } from '@/lib/content';
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
              className={cn(
                'text-xl font-bold tracking-tight transition-colors',
                showSolid ? 'text-navy-950' : 'text-white',
              )}
            >
              <span className="font-serif">Stretch Film</span>
              <span className="text-red-600"> Advice</span>
            </Link>

            <nav
              className="hidden items-center gap-8 md:flex"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    pathname === item.href
                      ? showSolid
                        ? 'text-blue-600'
                        : 'text-white'
                      : showSolid
                        ? 'text-slate-600 hover:text-red-600'
                        : 'text-white/80 hover:text-white',
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href="/contact"
                variant={showSolid ? 'primary' : 'ghost'}
                size="sm"
              >
                Get in Touch
              </Button>
            </nav>

            <button
              className={cn(
                'flex flex-col gap-1.5 p-2 md:hidden',
                showSolid ? 'text-navy-950' : 'text-white',
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
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
