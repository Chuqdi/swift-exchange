import type { CoinMeta } from './types';

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348168875899';

export const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Hi Swift Exchange, I'd like to start trading.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const COINS: CoinMeta[] = [
  { id: 'bitcoin', sym: 'BTC', name: 'Bitcoin', color: '#f7931a' },
  { id: 'ethereum', sym: 'ETH', name: 'Ethereum', color: '#627eea' },
  { id: 'tether', sym: 'USDT', name: 'Tether', color: '#26a17b' },
  { id: 'binancecoin', sym: 'BNB', name: 'BNB', color: '#f3ba2f' },
  { id: 'dogecoin', sym: 'DOGE', name: 'Dogecoin', color: '#c2a633' },
  { id: 'solana', sym: 'SOL', name: 'Solana', color: '#14f195' },
];

export const NAV_LINKS = [
  { href: '#why', label: 'Why Swift' },
  { href: '#coins', label: 'Market' },
  { href: '#testimonies', label: 'Testimonies' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export const TESTIMONIES = [
  { src: '/assets/testimony-1.jpg', caption: 'Confirmed trade' },
  { src: '/assets/testimony-2.jpg', caption: 'Payout sent' },
  { src: '/assets/testimony-3.jpg', caption: 'Same-day settlement' },
  { src: '/assets/testimony-4.jpg', caption: 'Repeat trader' },
  { src: '/assets/testimony-5.jpg', caption: 'Live rate given' },
  { src: '/assets/testimony-6.jpg', caption: 'Trade completed' },
];

export const FAQS = [
  {
    q: 'Where does the actual trading happen?',
    a: "Right here on WhatsApp. This website shares live rates and information, but no funds or trades are ever processed through it — you'll always deal directly with a member of our team on our official WhatsApp number.",
  },
  {
    q: 'How do I start a trade?',
    a: 'Tap any "Chat on WhatsApp" button on this page, tell us what you\'d like to buy or sell, and a trader will confirm the live rate with you before anything is sent.',
  },
  {
    q: 'Is SwiftExchange a registered business?',
    a: 'Yes. We operate as Swiftsale Services, registered with the Corporate Affairs Commission (CAC), Nigeria. Our registration details are listed in the footer of this page.',
  },
  {
    q: 'Which coins can I trade?',
    a: "Bitcoin, USDT, Ethereum, BNB and more. Send us a message with the coin you have in mind and we'll confirm availability and rate.",
  },
  {
    q: "How do I know I'm chatting with the real SwiftExchange?",
    a: 'Always start from the WhatsApp link on this official site rather than a forwarded number, and confirm the current live rate for your trade before sending anything.',
  },
  {
    q: 'Are rates fixed or live?',
    a: 'Rates track the live market shown on this page and are reconfirmed with you on WhatsApp at the moment of your trade, so what you agree to is always current.',
  },
];