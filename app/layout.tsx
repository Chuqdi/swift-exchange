import type { Metadata } from 'next';
// import { Fraunces, Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import { Inter, Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
//@ts-ignore
import './globals.css';
import { WingGradientDefs } from '../components/icons/WingIcon';



const fraunces = Inter({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['500', '600', '700', '900'],
  style: ['normal', ],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceMono = DM_Sans({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SwiftExchange — Trade Crypto in Real Time on WhatsApp',
  description:
    'SwiftExchange is a registered crypto trading desk. Every trade happens one-on-one on WhatsApp — fast, secure and available 24/7.',
    verification: {
    google: 'S1Wn5jWpYydtBHtxv3tRLK8OqVkBtOSJPKytI_q6UuU',
  },
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