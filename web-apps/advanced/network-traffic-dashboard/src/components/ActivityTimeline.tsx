import { TimelineItem } from '../types';

type ActivityTimelineProps = {
  items: TimelineItem[];
};

export function ActivityTimeline({ items }: ActivityTimelineProps) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Activity Timeline</h2>
      </div>
      <ol className="timeline">
        {items.map((item) => (
          <li key={item.id}>
            <span className="dot" />
            <div>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </div>
            <time>{item.time}</time>
          </li>
        ))}
      </ol>
    </section>
  );
}
