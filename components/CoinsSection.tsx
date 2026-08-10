'use client';

import { COINS } from '../lib/constants';
import { useMarket } from './MarketProvider';
import { Reveal } from './Reveal';
import { WingIcon } from './icons/WingIcon';
import { formatChange, formatPrice } from '../lib/format';

export function CoinsSection() {
  const { data } = useMarket();

  return (
    <section
      id="coins"
      style={{
        background: 'var(--surface-2)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="wrap">
        <Reveal className="refresh-line">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">
              <WingIcon /> Popular Coins
            </span>
            <h2>
              The market, live —<br />
              <span className="grad-text">right on this page.</span>
            </h2>
          </div>
          <span className="coin-live-dot">
            <span /> UPDATING
          </span>
        </Reveal>

        <div className="coins-grid">
          {COINS.map((c) => {
            const d = data[c.id];
            const up = d ? d.usd_24h_change >= 0 : true;
            return (
              <div className="coin-card reveal in" key={c.id}>
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
      </div>
    </section>
  );
}