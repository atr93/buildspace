## 🚀 Portfolio Lab

A curated collection of practical, public-safe applications spanning **web**, **mobile**, **Python tooling**, **business utilities**, and **security-aware engineering demos**.

This repository demonstrates:
- Full-stack development patterns
- Data analysis and automation
- Security-aware product design
- Clean architecture and maintainable code

> **Public Safety Note:** all projects use mock/sample/demo data only. No private credentials, no internal targets, and no harmful security behavior.

## 🧭 Portfolio Narrative

This monorepo is intentionally shaped around a builder profile: **frontend + Python + cyber/data-adjacent tooling**. Projects are grouped by difficulty to show progression from simple utilities to realistic product-style implementations.

## ⭐ Featured Projects

### 1) Admin Analytics Dashboard (Advanced Web)
A React + TypeScript dashboard simulating operational and SOC-style security insights with KPIs, incident queue, alert stream, and activity timeline.

### 2) Log Analyzer CLI (Intermediate Python)
A Python CLI that parses logs, summarizes severity trends, and flags anomaly hints such as error bursts and suspicious IP concentration.

### 3) Expense Flow Tracker (Intermediate Web)
A TypeScript React app for recording expenses, tracking budget usage, and visualizing category distribution.

### 4) Quick Calc CLI (Easy Python)
A clean command-line calculator with validated operations and optional expression mode.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, CSS (Tailwind-ready structure)
- **Backend Simulation:** local mock JSON data and client-side services
- **Python:** Python 3, argparse, statistics; pandas/numpy/sklearn planned in advanced tools
- **Mobile:** React Native + Expo (planned project set)
- **Tooling:** npm, pip, GitHub Actions

## 📂 Repository Structure

```text
portfolio-lab/
├── web-apps/
│   ├── easy/
│   ├── intermediate/
│   │   └── expense-flow-tracker
│   └── advanced/
│       └── admin-analytics-dashboard
├── mobile-apps/
│   ├── cross-platform/
│   ├── android-first/
│   └── ios-first/
├── python-tools/
│   ├── easy/
│   │   └── quick-calc-cli
│   ├── intermediate/
│   │   └── log-analyzer-cli
│   └── advanced/
├── business-apps/
├── games/
├── docs/
└── shared/screenshots/
```

For the full planned catalog (20+ projects), see [`docs/overview.md`](docs/overview.md).

## ▶️ Quick Start

### Run Admin Analytics Dashboard
```bash
cd web-apps/advanced/admin-analytics-dashboard
npm install
npm run dev
```

### Run Expense Flow Tracker
```bash
cd web-apps/intermediate/expense-flow-tracker
npm install
npm run dev
```

### Run Log Analyzer CLI
```bash
cd python-tools/intermediate/log-analyzer-cli
python3 src/main.py --file sample_data/app.log --top-ips 5
```

### Run Quick Calc CLI
```bash
cd python-tools/easy/quick-calc-cli
python3 main.py op add 12 3
python3 main.py expr "(5 + 9) * 2"
```

## 🖼️ Screenshots (placeholders)
- `shared/screenshots/web-admin-analytics-dashboard.png`
- `shared/screenshots/web-expense-flow-tracker.png`
- `shared/screenshots/python-log-analyzer-cli.png`

## ✅ Current Progress
- Root standards and contribution workflow in place
- Advanced web dashboard implemented and enhanced
- Intermediate Python CLI project added
- Intermediate web project added
- Easy Python utility added

## 📌 Suggested GitHub Pin Strategy
When publishing, pin these first:
1. Admin Analytics Dashboard
2. Log Analyzer CLI
3. Expense Flow Tracker
4. (Next) Crypto Address Demo Toolkit
5. (Next) Anomaly Detector Lab
6. (Next) One mobile app
