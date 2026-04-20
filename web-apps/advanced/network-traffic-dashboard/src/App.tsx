import { ActivityTimeline } from './components/ActivityTimeline';
import { AlertsPanel } from './components/AlertsPanel';
import { TrafficGraph } from './components/TrafficGraph';
import { alerts, timeline, trafficSeries } from './data/mockTraffic';

function App() {
  return (
    <main className="layout">
      <header className="card header">
        <h1>Network Traffic Dashboard</h1>
        <p>Cybersecurity-style dashboard using synthetic traffic and alert telemetry for portfolio demonstrations.</p>
      </header>

      <TrafficGraph points={trafficSeries} />

      <section className="grid">
        <AlertsPanel alerts={alerts} />
        <ActivityTimeline items={timeline} />
      </section>
    </main>
  );
}

export default App;
