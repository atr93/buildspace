import { AlertItem } from '../types';

type AlertsPanelProps = {
  alerts: AlertItem[];
};

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Suspicious IP Alerts</h2>
      </div>
      <ul className="alert-list">
        {alerts.map((alert) => (
          <li key={alert.id}>
            <span className={`pill ${alert.severity}`}>{alert.severity}</span>
            <div>
              <strong>{alert.event}</strong>
              <p>{alert.sourceIp} → {alert.destination}</p>
            </div>
            <time>{alert.time}</time>
          </li>
        ))}
      </ul>
    </section>
  );
}
