import { ActionItem, Alert, Incident, Kpi, TimelineEvent, TrafficPoint } from '../types';

export const kpis: Kpi[] = [
  { label: 'Active Users', value: '12,840', trend: 8.4, subtitle: 'vs. last 7 days' },
  { label: 'Uptime', value: '99.94%', trend: 0.2, subtitle: 'rolling 30-day average' },
  { label: 'Avg. Response', value: '236 ms', trend: -5.1, subtitle: 'API p95 latency' },
  { label: 'Security Events', value: '19', trend: -12.5, subtitle: 'high/medium flagged' }
];

export const trafficSeries: TrafficPoint[] = [
  { day: 'Mon', sessions: 9800 },
  { day: 'Tue', sessions: 10500 },
  { day: 'Wed', sessions: 11200 },
  { day: 'Thu', sessions: 12500 },
  { day: 'Fri', sessions: 11800 },
  { day: 'Sat', sessions: 8700 },
  { day: 'Sun', sessions: 9200 }
];

export const alerts: Alert[] = [
  {
    id: 'ALT-990',
    source: 'WAF Monitor',
    message: 'Rate-limit threshold crossed for /auth/login endpoint',
    severity: 'high',
    time: '08:44 UTC'
  },
  {
    id: 'ALT-989',
    source: 'Cloud IAM',
    message: 'Privileged role assignment request pending approval',
    severity: 'medium',
    time: '08:29 UTC'
  },
  {
    id: 'ALT-988',
    source: 'EDR Sensor',
    message: 'Suspicious script execution blocked in sandbox host',
    severity: 'critical',
    time: '08:11 UTC'
  }
];

export const timeline: TimelineEvent[] = [
  {
    id: 'TL-1',
    title: 'Incident INC-2038 escalated',
    detail: 'On-call engineer notified and playbook step 2 initiated.',
    timestamp: '08:47 UTC'
  },
  {
    id: 'TL-2',
    title: 'API gateway policy updated',
    detail: 'Temporary stricter threshold applied to reduce failed retries.',
    timestamp: '08:20 UTC'
  },
  {
    id: 'TL-3',
    title: 'Digest report generated',
    detail: 'Daily SOC summary exported for leadership review.',
    timestamp: '07:55 UTC'
  }
];

export const incidents: Incident[] = [
  {
    id: 'INC-2041',
    title: 'Auth token refresh retries elevated',
    severity: 'medium',
    owner: 'Priya S.',
    status: 'Monitoring',
    updatedAt: '2026-04-20 08:10 UTC'
  },
  {
    id: 'INC-2038',
    title: 'Failed login spike from sandbox region',
    severity: 'critical',
    owner: 'Marcus T.',
    status: 'Open',
    updatedAt: '2026-04-20 07:32 UTC'
  },
  {
    id: 'INC-2033',
    title: 'Analytics ingestion delay',
    severity: 'low',
    owner: 'Nina L.',
    status: 'Resolved',
    updatedAt: '2026-04-19 21:58 UTC'
  }
];

export const actions: ActionItem[] = [
  {
    id: 'ACT-88',
    task: 'Review elevated login failure signatures',
    due: '2026-04-21',
    assignee: 'Security Team'
  },
  {
    id: 'ACT-89',
    task: 'Tune API timeout threshold by service tier',
    due: '2026-04-22',
    assignee: 'Platform Team'
  },
  {
    id: 'ACT-90',
    task: 'Publish weekly reliability summary',
    due: '2026-04-24',
    assignee: 'Operations'
  }
];
