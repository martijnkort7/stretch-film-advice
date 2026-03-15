import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Stretch Film Advice | Expert Stretch Film Consulting',
    template: '%s | Stretch Film Advice',
  },
  description:
    'Reduce stretch film costs by 30\u201350% with expert advice on film selection and machine optimisation. 20+ years of pallet wrapping experience across 17 European countries.',
  metadataBase: new URL('https://www.stretchfilmadvice.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Stretch Film Advice',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
