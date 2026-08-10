'use client';

import { COINS } from '../lib/constants';
import { CoinPriceMap } from '../lib/types';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';


interface MarketContextValue {
  data: CoinPriceMap;
  loading: boolean;
}

const MarketContext = createContext<MarketContextValue>({ data: {}, loading: true });

export function useMarket() {
  return useContext(MarketContext);
}

export function MarketProvider({
  children,
  intervalMs = 45000,
}: {
  children: ReactNode;
  intervalMs?: number;
}) {
  const [data, setData] = useState<CoinPriceMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const ids = COINS.map((c) => c.id).join(',');
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
        );
        const json = (await res.json()) as CoinPriceMap;
        if (active) setData(json);
      } catch {
        // keep last known data on failure
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    const id = setInterval(load, intervalMs);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, [intervalMs]);

  return <MarketContext.Provider value={{ data, loading }}>{children}</MarketContext.Provider>;
}