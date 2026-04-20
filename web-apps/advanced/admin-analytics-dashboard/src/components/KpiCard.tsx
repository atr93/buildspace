import { Kpi } from '../types';

type KpiCardProps = {
  item: Kpi;
};

export function KpiCard({ item }: KpiCardProps) {
  const trendClass = item.trend >= 0 ? 'trend-up' : 'trend-down';
  const trendSymbol = item.trend >= 0 ? '+' : '';

  return (
    <article className="card kpi-card">
      <p className="kpi-label">{item.label}</p>
      <h3>{item.value}</h3>
      <p className={`kpi-trend ${trendClass}`}>{trendSymbol}{item.trend}%</p>
      <p className="kpi-subtitle">{item.subtitle}</p>
    </article>
  );
}
