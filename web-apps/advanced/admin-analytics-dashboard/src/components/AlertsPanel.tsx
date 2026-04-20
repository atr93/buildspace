import { Alert } from '../types';

type AlertsPanelProps = {
  alerts: Alert[];
};

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Live Alerts</h2>
        <span className="badge">SOC feed (mock)</span>
      </div>
      <ul className="alert-list">
        {alerts.map((alert) => (
          <li key={alert.id} className="alert-item">
            <span className={`pill severity-${alert.severity}`}>{alert.severity}</span>
            <div>
              <strong>{alert.source}</strong>
              <p>{alert.message}</p>
            </div>
            <time>{alert.time}</time>
          </li>
        ))}
      </ul>
    </section>
  );
}
