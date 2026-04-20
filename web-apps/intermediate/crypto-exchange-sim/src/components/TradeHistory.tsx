import { Trade } from '../types';

type TradeHistoryProps = {
  trades: Trade[];
};

export function TradeHistory({ trades }: TradeHistoryProps) {
  return (
    <section className="card">
      <h2>Trade History</h2>
      {trades.length === 0 ? <p>No trades yet.</p> : (
        <ul className="history">
          {trades.map((trade) => (
            <li key={trade.id}>
              <span className={`pill ${trade.side.toLowerCase()}`}>{trade.side}</span>
              <strong>{trade.quantity} {trade.symbol}</strong>
              <span>${trade.total.toFixed(2)}</span>
              <time>{new Date(trade.timestamp).toLocaleString()}</time>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
