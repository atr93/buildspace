import { TimelineEvent } from '../types';

type TimelineActivityProps = {
  events: TimelineEvent[];
};

export function TimelineActivity({ events }: TimelineActivityProps) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Timeline Activity</h2>
        <span className="muted">Recent events</span>
      </div>
      <ol className="timeline-list">
        {events.map((event) => (
          <li key={event.id}>
            <div className="timeline-dot" />
            <div>
              <strong>{event.title}</strong>
              <p className="muted">{event.detail}</p>
            </div>
            <time>{event.timestamp}</time>
          </li>
        ))}
      </ol>
    </section>
  );
}
