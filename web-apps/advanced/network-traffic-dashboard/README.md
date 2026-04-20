# Network Traffic Dashboard

Cybersecurity-style web dashboard visualizing synthetic network traffic and suspicious activity alerts.

## Purpose
Demonstrates data visualization, alert severity modeling, and operational dashboard UI patterns for cyber-adjacent product work.

## Features
- Simulated inbound/outbound traffic graph over time
- Suspicious IP alerts with color-coded severity
- Activity timeline for incident response events
- Dark themed responsive UI
- Fully mock/synthetic dataset (public-safe)

## Run
```bash
npm install
npm run dev
```

## Expected UI
- Header with dashboard context
- Throughput line chart (inbound/outbound)
- Alerts panel with severity pills
- Timeline showing operational response events

## Future Improvements
- Add filters for severity and time windows
- Add geo-map simulation for source IP clusters
- Add CSV export of alerts
