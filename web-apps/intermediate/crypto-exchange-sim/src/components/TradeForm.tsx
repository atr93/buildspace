import { FormEvent, useMemo, useState } from 'react';
import { Asset, Trade } from '../types';

type TradeFormProps = {
  assets: Asset[];
  selected: string;
  usdBalance: number;
  onSubmitTrade: (trade: Trade) => void;
};

export function TradeForm({ assets, selected, usdBalance, onSubmitTrade }: TradeFormProps) {
  const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  const asset = useMemo(() => assets.find((item) => item.symbol === selected) ?? assets[0], [assets, selected]);

  const placeTrade = (event: FormEvent) => {
    event.preventDefault();
    setError('');
    const qty = Number(quantity);
    if (!Number.isFinite(qty) || qty <= 0) return setError('Quantity must be greater than zero.');

    const total = qty * asset.priceUsd;
    if (side === 'BUY' && total > usdBalance) return setError('Insufficient USD balance for this buy order.');

    onSubmitTrade({
      id: crypto.randomUUID(),
      side,
      symbol: asset.symbol,
      quantity: qty,
      price: asset.priceUsd,
      total,
      timestamp: new Date().toISOString()
    });

    setQuantity('');
  };

  return (
    <form className="card form" onSubmit={placeTrade}>
      <h2>Trade Ticket</h2>
      <p>{asset.name} ({asset.symbol}) @ ${asset.priceUsd.toLocaleString()}</p>
      <select value={side} onChange={(e) => setSide(e.target.value as 'BUY' | 'SELL')}>
        <option value="BUY">BUY</option>
        <option value="SELL">SELL</option>
      </select>
      <input type="number" min="0.0001" step="0.0001" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
      {error && <p className="error">{error}</p>}
      <button type="submit">Place {side} Order</button>
    </form>
  );
}
