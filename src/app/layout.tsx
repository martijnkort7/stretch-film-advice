import { Inter, Instrument_Serif } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { MobileContactBar } from '@/components/ui/MobileContactBar';
import { baseMetadata, localBusinessSchema } from '@/lib/metadata';
import { SchemaScript } from '@/components/ui/SchemaScript';
import { ui } from '@/lib/content';
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

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <SchemaScript schema={localBusinessSchema} />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
        >
          {ui.skipToContent}
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
        <MobileContactBar />
        <Analytics />
      </body>
    </html>
  );
}
