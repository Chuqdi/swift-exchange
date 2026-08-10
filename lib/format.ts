export function formatPrice(p: number): string {
  if (p >= 1) {
    return '$' + p.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  return '$' + p.toLocaleString(undefined, { maximumFractionDigits: 4 });
}

export function formatChange(change: number): string {
  const up = change >= 0;
  return `${up ? '▲' : '▼'} ${Math.abs(change).toFixed(2)}%`;
}