export type Asset = {
  symbol: string;
  name: string;
  priceUsd: number;
  change24h: number;
};

export type Trade = {
  id: string;
  side: 'BUY' | 'SELL';
  symbol: string;
  quantity: number;
  price: number;
  total: number;
  timestamp: string;
};
