import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { AccessibilityToggle } from '@/components/AccessibilityToggle';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bible TapAIstry',
  description: 'Scripture Overview - A dynamic, semantic, accessible Bible experience',
  keywords: ['Bible', 'Scripture', 'Overview', 'Genesis', 'Eden', 'Creation'],
  authors: [{ name: 'Bible TapAIstry' }],
  openGraph: {
    title: 'Bible TapAIstry',
    description: 'Scripture Overview - A dynamic, semantic, accessible Bible experience',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-deep-black text-text-primary antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <AccessibilityToggle />
      </body>
    </html>
  );
}
