import { Incident } from '../types';

type IncidentTableProps = {
  incidents: Incident[];
};

const severityOrder: Record<Incident['severity'], number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3
};

export function IncidentTable({ incidents }: IncidentTableProps) {
  const sorted = [...incidents].sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return (
    <section className="card">
      <div className="section-header">
        <h2>Incident Queue</h2>
        <span className="muted">Prioritized by severity</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Severity</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <span className={`pill severity-${item.severity}`}>{item.severity}</span>
                </td>
                <td>{item.owner}</td>
                <td>{item.status}</td>
                <td>{item.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
