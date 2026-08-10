export const WHATSAPP_NUMBER = "2348168875899"; // TODO: replace with your live WhatsApp number

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Coin = {
  id: string; // CoinGecko id, used for the live feed
  symbol: string;
  name: string;
  icon: string; // 2-letter fallback glyph if no image is wired up
};

export const COINS: Coin[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", icon: "\u20BF" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", icon: "\u039E" },
  { id: "binancecoin", symbol: "BNB", name: "BNB", icon: "B" },
  { id: "dogecoin", symbol: "DOGE", name: "Dogecoin", icon: "\u0110" },
  { id: "tether", symbol: "USDT", name: "Tether", icon: "\u20AE" },
  { id: "solana", symbol: "SOL", name: "Solana", icon: "S" },
];

export const WHY_CARDS = [
  {
    title: "Talk to a real trader",
    body: "No bots, no order books. A licensed SwiftExchange trader confirms your rate and closes the deal with you, personally, on WhatsApp.",
    icon: "MessageCircle",
  },
  {
    title: "Rates in under a minute",
    body: "Send your coin and amount. Get a locked-in quote back before your chat notification even settles.",
    icon: "Zap",
  },
  {
    title: "Zero app downloads",
    body: "No wallet connects, no new app to install or trust. If you already have WhatsApp, you already have SwiftExchange.",
    icon: "ShieldCheck",
  },
];

export const FAQS = [
  {
    q: "What is SwiftExchange?",
    a: "SwiftExchange is a digital asset exchange that gives you access to financial freedom through swapping crypto assets \u2014 handled directly by a trader over WhatsApp, not an on-site order book.",
  },
  {
    q: "Wait, why do I trade on WhatsApp and not on this website?",
    a: "Because it's faster and more personal. Instead of navigating charts and order books, you chat with a real SwiftExchange trader who quotes your rate, confirms it with you, and settles the swap \u2014 usually in minutes.",
  },
  {
    q: "Is trading over WhatsApp safe?",
    a: "Yes. Every trader is verified and every quote is confirmed in writing before any funds move. You always see and agree to your rate before you send anything.",
  },
  {
    q: "Why swap my coin?",
    a: "For active traders, it's a way to take profit and meet day-to-day needs. For new traders, it's a way to acquire crypto assets and start a trading career.",
  },
  {
    q: "Why SwiftExchange?",
    a: "SwiftExchange is built to give you the best exchange experience in the market. We're licensed and registered to deliver a trustworthy, human-first trading experience.",
  },
];

export const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com/_SwiftExchange" },
  { label: "TikTok", href: "https://tiktok.com/@_swiftexchange" },
  { label: "Instagram", href: "https://www.instagram.com/myswiftexchange/" },
];
