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
A curated, public-safe collection of projects focused on **security-aware engineering**, **data-driven tooling**, and **modern application development**.

This portfolio is designed to tell one clear story:
> *This developer builds security-aware tools and data-driven apps with practical UX and clean architecture.*

All projects use synthetic/mock data and contain no private credentials, secrets, or target-specific behavior.

## 🚀 Featured Projects

### 🔐 Admin Analytics Dashboard
A SOC-style dashboard simulating real-time alerts, incidents, and operational metrics using synthetic data.

### 📊 Log Analyzer CLI
A Python tool for parsing structured logs and surfacing anomaly hints (error spikes, critical events, IP concentration).

### 💰 Expense Flow Tracker
A modern web app for tracking and visualizing personal financial data with local persistence.

## New Builds in This Iteration

### 1) Secure Notes App (Web)
React + TypeScript app with local encrypted vault behavior, lock/unlock flow, and note CRUD.

### 2) Crypto Key Analyzer (Python)
Educational CLI for analyzing dummy hex keys (bit distribution, entropy, repeating patterns).

### 3) Network Traffic Dashboard (Web)
Dark-themed cyber dashboard with traffic graph, suspicious IP alerts, and timeline.

## 🛠️ Tech Stack
- Frontend: React, TypeScript, Vite, Recharts
- Python: Python 3, numpy, sympy
- Mobile (planned): React Native + Expo
- CI: GitHub Actions

## 📂 Repository Structure
```text
web-apps/
  advanced/
    admin-analytics-dashboard/
    secure-notes-app/
    network-traffic-dashboard/
  intermediate/
    expense-flow-tracker/
python-tools/
  easy/
    quick-calc-cli/
  intermediate/
    log-analyzer-cli/
  advanced/
    crypto-key-analyzer/
shared/screenshots/
mvc-core/
  AdminOpsDashboard.Mvc/
  ExpenseFlow.Mvc/
  RideFlowDispatch.Mvc/
```

## ▶️ Quick Start

```bash
# Secure Notes App
cd web-apps/advanced/secure-notes-app
npm install && npm run dev

# Crypto Key Analyzer
cd python-tools/advanced/crypto-key-analyzer
pip install -r requirements.txt
python3 main.py --key 0x1a2b3c

# Network Traffic Dashboard
cd web-apps/advanced/network-traffic-dashboard
npm install && npm run dev
```

## Screenshots

Binary screenshots were intentionally removed for branch/export compatibility in environments that do not support binary artifacts in diffs.

See placeholders in `shared/screenshots/README.md`.



## 🧱 Parallel ASP.NET MVC Core Apps

To satisfy server-rendered architecture requirements, parallel ASP.NET MVC Core projects are included:
- `mvc-core/AdminOpsDashboard.Mvc`
- `mvc-core/ExpenseFlow.Mvc`
- `mvc-core/RideFlowDispatch.Mvc`

Run pattern:
```bash
cd mvc-core/AdminOpsDashboard.Mvc
dotnet restore
dotnet run
```

## ✅ Full Functionality Verification

To verify all apps and tools on a normal developer machine, follow:
- `docs/runtime-verification.md`

Fast checks:
```bash
python3 scripts/offline_integrity_check.py
```

If npm install fails due proxy/registry issues:
```bash
npm config set registry https://registry.npmjs.org/
npm cache clean --force
```

## Public Safety Policy
- No real credentials or private keys
- No real target recon or exploit functionality
- Security-related projects are educational/defensive only
- Datasets are synthetic and safe for public release
