'use client';

import { COINS } from "../lib/constants";
import { useMarket } from "./MarketProvider";
import { formatChange, formatPrice } from "../lib/format";


export function TickerStrip() {
  const { data } = useMarket();
  // Duplicate the list so the CSS marquee loop reads seamlessly.
  const items = [...COINS, ...COINS];

  return (
    <div className="ticker-strip">
      <div className="ticker-track">
        {items.map((c, i) => {
          const d = data[c.id];
          const up = d ? d.usd_24h_change >= 0 : true;
          return (
            <div className="ticker-item" key={`${c.id}-${i}`}>
              <b>{c.sym}</b> {d ? formatPrice(d.usd) : '—'}{' '}
              <span className={up ? 'up' : 'down'}>{d ? formatChange(d.usd_24h_change) : ''}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}