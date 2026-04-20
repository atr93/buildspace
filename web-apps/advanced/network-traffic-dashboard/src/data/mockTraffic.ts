import { AlertItem, TimelineItem, TrafficPoint } from '../types';

export const trafficSeries: TrafficPoint[] = [
  { timestamp: '09:00', inboundMbps: 120, outboundMbps: 95 },
  { timestamp: '09:10', inboundMbps: 130, outboundMbps: 88 },
  { timestamp: '09:20', inboundMbps: 155, outboundMbps: 102 },
  { timestamp: '09:30', inboundMbps: 280, outboundMbps: 160 },
  { timestamp: '09:40', inboundMbps: 210, outboundMbps: 140 },
  { timestamp: '09:50', inboundMbps: 185, outboundMbps: 133 },
  { timestamp: '10:00', inboundMbps: 170, outboundMbps: 120 }
];

export const alerts: AlertItem[] = [
  {
    id: 'NT-412',
    sourceIp: '203.0.113.44',
    destination: 'api-gateway',
    event: 'Burst of failed auth attempts',
    severity: 'critical',
    time: '09:32 UTC'
  },
  {
    id: 'NT-409',
    sourceIp: '198.51.100.89',
    destination: 'cdn-edge',
    event: 'Unusual request rate spike',
    severity: 'high',
    time: '09:27 UTC'
  },
  {
    id: 'NT-406',
    sourceIp: '192.0.2.123',
    destination: 'billing-api',
    event: 'Repeated timeout retries',
    severity: 'medium',
    time: '09:14 UTC'
  }
];

export const timeline: TimelineItem[] = [
  {
    id: 'TL-210',
    title: 'Firewall rule tightened',
    detail: 'Temporary throttle policy enabled for suspicious subnet.',
    time: '09:38 UTC'
  },
  {
    id: 'TL-209',
    title: 'Alert NT-412 escalated',
    detail: 'SOC on-call notified and triage procedure initiated.',
    time: '09:33 UTC'
  },
  {
    id: 'TL-208',
    title: 'Traffic spike detected',
    detail: 'Inbound peaked at 280 Mbps, 65% above baseline.',
    time: '09:30 UTC'
  }
];
