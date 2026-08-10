export interface CoinPricePoint {
  usd: number;
  usd_24h_change: number;
}

export type CoinPriceMap = Record<string, CoinPricePoint>;

export interface CoinMeta {
  id: string;
  sym: string;
  name: string;
  color: string;
}