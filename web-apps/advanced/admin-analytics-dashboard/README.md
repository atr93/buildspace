# Admin Analytics Dashboard

A portfolio-ready, public-safe dashboard demo that visualizes synthetic operational metrics and incident queue data.

## Tech Stack
- React 18
- TypeScript
- Vite
- Plain CSS (responsive)

## Purpose
Demonstrate practical dashboard design and frontend architecture for:
- KPI snapshots
- trend visualization
- incident prioritization
- action queue planning

## Features
- KPI cards with positive/negative trend states
- Weekly session bar chart (mock data)
- Incident queue sorted by severity
- Live alerts panel with SOC-style severity signals
- Timeline activity stream for operational context
- Action items panel for operations workflow
- Responsive layout for desktop and tablet/mobile widths

## Project Structure
```text
admin-analytics-dashboard/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── types.ts
│   ├── components/
│   │   ├── IncidentTable.tsx
│   │   ├── KpiCard.tsx
│   │   └── TrafficChart.tsx
│   └── data/
│       └── mockData.ts
└── README.md
```

## Run Locally
```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

## Screenshot / Expected UI
A clean operations dashboard showing:
- a top summary header
- four KPI cards in a responsive grid
- weekly sessions bar chart
- action item panel
- incident table with severity pills

## Safety Notes
- Uses synthetic sample data only
- No external API keys
- No private telemetry or credentials

## Future Improvements
- Add filtering by time range and incident severity
- Add dark mode
- Add CSV export for incident list
- Introduce unit tests for sorting and KPI formatting
