import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import { WingGradientDefs } from '../components/icons/WingIcon';



const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SwiftExchange — Trade Crypto in Real Time on WhatsApp',
  description:
    'SwiftExchange is a registered crypto trading desk. Every trade happens one-on-one on WhatsApp — fast, secure and available 24/7.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${spaceMono.variable}`}>
      <body>
        <WingGradientDefs />
        {children}
      </body>
    </html>
  );
}