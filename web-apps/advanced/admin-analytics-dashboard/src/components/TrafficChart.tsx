import { TrafficPoint } from '../types';

type TrafficChartProps = {
  points: TrafficPoint[];
};

export function TrafficChart({ points }: TrafficChartProps) {
  const maxSessions = Math.max(...points.map((item) => item.sessions));

  return (
    <section className="card">
      <div className="section-header">
        <h2>Weekly Sessions</h2>
        <span className="badge">Mock data</span>
      </div>
      <div className="bar-chart">
        {points.map((point) => (
          <div key={point.day} className="bar-wrapper">
            <div
              className="bar"
              style={{ height: `${(point.sessions / maxSessions) * 100}%` }}
              aria-label={`${point.day} ${point.sessions} sessions`}
              title={`${point.day}: ${point.sessions.toLocaleString()} sessions`}
            />
            <span>{point.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
