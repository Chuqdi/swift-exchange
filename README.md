# SwiftExchange \u2014 redesign

Single-page Next.js 14 (App Router) + TypeScript + Tailwind redesign of
myswiftexchange.org, built around one idea: **the trade happens on
WhatsApp, not on the site.**

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` produces a production build
(verified passing in a clean install).

## What to change before shipping

- **WhatsApp number**: `lib/data.ts` \u2192 `WHATSAPP_NUMBER`. Currently set to
  the number from the live site (`08168875899` \u2192 `2348168875899`).
  Swap for whichever line should receive trades.
- **Copy**: hero stats ("2 min average quote", "24/7"), FAQ answers, and
  the scripted chat mock in `components/Hero.tsx` are placeholder \u2014
  written to match your brief but worth a real review pass.
- **Coin list**: `lib/data.ts` \u2192 `COINS`. IDs are CoinGecko IDs; the
  market section fetches live USD prices + 24h change straight from
  CoinGecko's public API client-side (no key needed), polling every 20s.
  Swap the list or point it at your own pricing API if you have one.
- **Logo**: the navbar/footer currently use a generated "S" mark. Drop in
  your real logo file when you have one.

## Design notes

- **Palette**: near-black base (`ink-950`) with an orange\u2192flare gradient
  (`ember-gradient`, orange through a warm red-pink) as the primary
  accent, and WhatsApp green reserved specifically for chat/CTA moments
  \u2014 so green always reads as "this is the WhatsApp action."
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (prices
  / data / eyebrows) \u2014 loaded via `next/font/google`, self-hosted at
  build time.
- **Signature element**: the animated WhatsApp conversation mock in the
  hero (`components/Hero.tsx`) \u2014 a scripted, looping exchange that
  shows a live quote happening in chat. CTA buttons echo it with a
  chat-bubble notch (`.chat-notch` in `globals.css`).
- **Motion**: framer-motion for scroll-reveals, staggered cards, the FAQ
  accordion, and the hero chat sequence; a CSS marquee for the price
  ticker. All respects `prefers-reduced-motion`.
