import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { TrafficPoint } from '../types';

type TrafficGraphProps = {
  points: TrafficPoint[];
};

export function TrafficGraph({ points }: TrafficGraphProps) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Traffic Throughput</h2>
        <span className="badge">Simulated</span>
      </div>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={points}>
            <XAxis dataKey="timestamp" stroke="#8ea0c8" />
            <YAxis stroke="#8ea0c8" />
            <Tooltip />
            <Line type="monotone" dataKey="inboundMbps" stroke="#4e87ff" strokeWidth={2.2} />
            <Line type="monotone" dataKey="outboundMbps" stroke="#3ed2b2" strokeWidth={2.2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
