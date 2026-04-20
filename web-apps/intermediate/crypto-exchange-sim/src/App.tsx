import { useMemo, useState } from 'react';
import { MarketTable } from './components/MarketTable';
import { TradeForm } from './components/TradeForm';
import { TradeHistory } from './components/TradeHistory';
import { assets } from './data/mockMarket';
import { Trade } from './types';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState('BTC');
  const [usdBalance, setUsdBalance] = useState(10000);
  const [trades, setTrades] = useState<Trade[]>([]);

  const pnl = useMemo(() => {
    return trades.reduce((sum, trade) => sum + (trade.side === 'SELL' ? trade.total : -trade.total), 0);
  }, [trades]);

  const submitTrade = (trade: Trade) => {
    setTrades([trade, ...trades]);
    setUsdBalance((current) => trade.side === 'BUY' ? current - trade.total : current + trade.total);
  };

  return (
    <main className="layout">
      <header className="card">
        <h1>Crypto Exchange Simulator</h1>
        <p>Paper-trading demo using synthetic market data. Educational use only.</p>
        <div className="kpis">
          <span>USD Balance: ${usdBalance.toFixed(2)}</span>
          <span>Net Cash Flow: ${pnl.toFixed(2)}</span>
          <span>Orders: {trades.length}</span>
        </div>
      </header>
      <section className="grid">
        <MarketTable assets={assets} selected={selectedSymbol} onSelect={setSelectedSymbol} />
        <TradeForm assets={assets} selected={selectedSymbol} usdBalance={usdBalance} onSubmitTrade={submitTrade} />
      </section>
      <TradeHistory trades={trades} />
    </main>
  );
}

export default App;
