'use client';

import { COINS, WHATSAPP_LINK } from "../lib/constants";
import { useMarket } from "./MarketProvider";
import { WingIcon } from "./icons/WingIcon";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { formatChange, formatPrice } from "../lib/format";


export function Hero() {
  const { data } = useMarket();
  const topCoins = COINS.slice(0, 4);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <WingIcon className="wing-icon wing-float w1" />
      <WingIcon className="wing-icon wing-float w2" />

      <div className="wrap hero-inner">
        <div>
          {/* @ts-ignore */}
          <Reveal as="span" className="eyebrow" style={{ display: 'inline-flex' } as any}>
            <WingIcon /> 24/7 · WhatsApp trading desk
          </Reveal>

          <Reveal as="h1">
            Trade in real time with our <span className="grad-text">24/7 online trader</span>.
          </Reveal>

          <Reveal as="p" className="sub">
            Click here to get started.
          </Reveal>

          <Reveal className="hero-ctas">
            <a className="btn btn-primary pulse" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              Start trading on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#why">
              See why traders choose Swift
            </a>
          </Reveal>

          <Reveal className="whatsapp-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16h.01" />
            </svg>
            <span>
              This website is informational only — every trade is confirmed and carried out
              one-on-one on our official WhatsApp line, never through an online checkout.
            </span>
          </Reveal>
        </div>

        <Reveal className="hero-card">
          <span className="tag">
            <span className="dot" /> LIVE MARKET
          </span>
          <div style={{ marginTop: 16 }}>
            {topCoins.map((c) => {
              const d = data[c.id];
              const up = d ? d.usd_24h_change >= 0 : true;
              return (
                <div className="mini-row" key={c.id}>
                  <div className="mini-left">
                    <div className="coin-badge" style={{ background: c.color }}>
                      {c.sym.slice(0, 1)}
                    </div>
                    <div>
                      <div className="mini-name">{c.name}</div>
                      <div className="mini-sym">{c.sym}</div>
                    </div>
                  </div>
                  <div className="mini-right">
                    <div className="mini-price">{d ? formatPrice(d.usd) : '—'}</div>
                    <div className={`mini-change ${up ? 'up' : 'down'}`}>
                      {d ? formatChange(d.usd_24h_change) : '—'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}