export type Severity = 'low' | 'medium' | 'high' | 'critical';

export type TrafficPoint = {
  timestamp: string;
  inboundMbps: number;
  outboundMbps: number;
};

export type AlertItem = {
  id: string;
  sourceIp: string;
  destination: string;
  event: string;
  severity: Severity;
  time: string;
};

export type TimelineItem = {
  id: string;
  title: string;
  detail: string;
  time: string;
};
