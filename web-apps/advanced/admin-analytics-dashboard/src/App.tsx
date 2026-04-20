import { AlertsPanel } from './components/AlertsPanel';
import { IncidentTable } from './components/IncidentTable';
import { KpiCard } from './components/KpiCard';
import { TimelineActivity } from './components/TimelineActivity';
import { TrafficChart } from './components/TrafficChart';
import { actions, alerts, incidents, kpis, timeline, trafficSeries } from './data/mockData';

function App() {
  return (
    <main className="layout">
      <header className="topbar card">
        <div>
          <p className="eyebrow">Security Operations Console</p>
          <h1>Admin Analytics Dashboard</h1>
          <p className="muted">
            Portfolio-safe demo with synthetic operational monitoring, alert streams, and incident response context.
          </p>
        </div>
      </header>

      <section className="kpi-grid">
        {kpis.map((item) => (
          <KpiCard key={item.label} item={item} />
        ))}
      </section>

      <section className="content-grid">
        <TrafficChart points={trafficSeries} />
        <AlertsPanel alerts={alerts} />
      </section>

      <section className="content-grid">
        <section className="card">
          <div className="section-header">
            <h2>Action Items</h2>
            <span className="muted">This week</span>
          </div>
          <ul className="action-list">
            {actions.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.task}</strong>
                  <p className="muted">{item.assignee}</p>
                </div>
                <time>{item.due}</time>
              </li>
            ))}
          </ul>
        </section>

        <TimelineActivity events={timeline} />
      </section>

      <IncidentTable incidents={incidents} />
    </main>
  );
}

export default App;
