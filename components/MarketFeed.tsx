"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Radio } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { COINS, waLink } from "../lib/data";

type PriceInfo = {
  usd: number;
  usd_24h_change: number;
};

type PriceMap = Record<string, PriceInfo>;

const REFRESH_MS = 20000;

function formatUsd(value: number) {
  if (value >= 1) {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });
  }
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 4,
  });
}

export default function MarketFeed() {
  const [prices, setPrices] = useState<PriceMap | null>(null);
  const [error, setError] = useState(false);
  const prevPrices = useRef<PriceMap>({});
  const [flash, setFlash] = useState<Record<string, "up" | "down" | null>>({});

  useEffect(() => {
    let cancelled = false;

    async function fetchPrices() {
      try {
        const ids = COINS.map((c) => c.id).join(",");
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
        );
        if (!res.ok) throw new Error("bad response");
        const data: PriceMap = await res.json();
        if (cancelled) return;

        const nextFlash: Record<string, "up" | "down" | null> = {};
        COINS.forEach((c) => {
          const prev = prevPrices.current[c.id]?.usd;
          const next = data[c.id]?.usd;
          if (prev !== undefined && next !== undefined && next !== prev) {
            nextFlash[c.id] = next > prev ? "up" : "down";
          }
        });

        setFlash(nextFlash);
        setPrices(data);
        prevPrices.current = data;
        setError(false);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    fetchPrices();
    const interval = setInterval(fetchPrices, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const tickerCoins = prices ? [...COINS, ...COINS] : [];

  return (
    <section id="market" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Popular coins"
            title="Live market, real-time."
            body="Watch prices move while you decide \u2014 then take the trade to WhatsApp when you're ready."
          />
          <div className="flex items-center gap-2 text-xs font-mono text-wa-500 mb-1">
            <Radio className="h-3.5 w-3.5 animate-pulse-soft" />
            LIVE
          </div>
        </div>

        {/* Scrolling ticker tape */}
        <div className="mt-10 relative overflow-hidden rounded-xl border border-white/10 bg-ink-900/60 py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-950 to-transparent z-10" />
          {prices ? (
            <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-sm">
              {tickerCoins.map((c, i) => {
                const info = prices[c.id];
                const change = info?.usd_24h_change ?? 0;
                const up = change >= 0;
                return (
                  <span key={`${c.id}-${i}`} className="flex items-center gap-2 px-6">
                    <span className="text-paper-100 font-medium">{c.symbol}</span>
                    <span className="text-mute-400">
                      {info ? formatUsd(info.usd) : "\u2014"}
                    </span>
                    <span className={up ? "text-wa-500" : "text-flare-500"}>
                      {up ? "\u25B2" : "\u25BC"} {Math.abs(change).toFixed(2)}%
                    </span>
                  </span>
                );
              })}
            </div>
          ) : (
            <div className="px-6 text-sm text-mute-400 font-mono">
              {error ? "Live feed unavailable right now" : "Loading live prices\u2026"}
            </div>
          )}
        </div>

        {/* Coin cards */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {COINS.map((coin, i) => {
            const info = prices?.[coin.id];
            const change = info?.usd_24h_change ?? 0;
            const up = change >= 0;
            const flashState = flash[coin.id];

            return (
              <motion.a
                key={coin.id}
                href={waLink(`I want to trade ${coin.symbol} on SwiftExchange`)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border border-white/10 bg-ink-900 p-5 hover:border-ember-500/40 transition-colors ${
                  flashState === "up"
                    ? "animate-flash-up"
                    : flashState === "down"
                    ? "animate-flash-down"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="h-9 w-9 rounded-full bg-ember-gradient flex items-center justify-center font-display text-sm font-bold text-ink-950">
                      {coin.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-paper-100">{coin.symbol}</p>
                      <p className="text-xs text-mute-400">{coin.name}</p>
                    </div>
                  </div>
                  {info && (
                    <span
                      className={`inline-flex items-center gap-0.5 text-xs font-mono font-medium ${
                        up ? "text-wa-500" : "text-flare-500"
                      }`}
                    >
                      {up ? (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowDownRight className="h-3.5 w-3.5" />
                      )}
                      {Math.abs(change).toFixed(2)}%
                    </span>
                  )}
                </div>
                <p className="mt-4 font-mono text-lg text-paper-100">
                  {info ? formatUsd(info.usd) : error ? "\u2014" : "Loading\u2026"}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
