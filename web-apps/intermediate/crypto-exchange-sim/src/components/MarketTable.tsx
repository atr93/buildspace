import { Asset } from '../types';

type MarketTableProps = {
  assets: Asset[];
  selected: string;
  onSelect: (symbol: string) => void;
};

export function MarketTable({ assets, selected, onSelect }: MarketTableProps) {
  return (
    <section className="card">
      <h2>Market Watch</h2>
      <table>
        <thead><tr><th>Asset</th><th>Price (USD)</th><th>24h</th><th /></tr></thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.symbol} className={selected === asset.symbol ? 'active' : ''}>
              <td>{asset.name} ({asset.symbol})</td>
              <td>${asset.priceUsd.toLocaleString()}</td>
              <td className={asset.change24h >= 0 ? 'up' : 'down'}>{asset.change24h}%</td>
              <td><button onClick={() => onSelect(asset.symbol)}>Trade</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
