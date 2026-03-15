'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { navigation } from '@/lib/content';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-navy-950"
        >
          <div className="flex h-20 items-center justify-end px-6">
            <button
              onClick={onClose}
              className="p-2 text-white"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav
            className="flex flex-col items-center justify-center gap-8 pt-16"
            aria-label="Mobile navigation"
          >
            {navigation.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'font-serif text-3xl transition-colors',
                    pathname === item.href
                      ? 'text-white'
                      : 'text-white/60 hover:text-white',
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + navigation.length * 0.05,
                duration: 0.4,
              }}
              className="mt-4 border-t border-white/10 pt-8"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className={cn(
                  'text-sm font-medium uppercase tracking-widest transition-colors',
                  pathname === '/contact'
                    ? 'text-white'
                    : 'text-white/60 hover:text-white',
                )}
              >
                Get in Touch
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
