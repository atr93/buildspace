export type Kpi = {
  label: string;
  value: string;
  trend: number;
  subtitle: string;
};

export type TrafficPoint = {
  day: string;
  sessions: number;
};

export type Incident = {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  owner: string;
  status: 'Open' | 'Monitoring' | 'Resolved';
  updatedAt: string;
};

export type Alert = {
  id: string;
  source: string;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  time: string;
};

export type TimelineEvent = {
  id: string;
  title: string;
  detail: string;
  timestamp: string;
};

export type ActionItem = {
  id: string;
  task: string;
  due: string;
  assignee: string;
};
