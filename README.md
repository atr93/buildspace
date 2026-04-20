## 🚀 Portfolio Lab

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

## Public Safety Policy
- No real credentials or private keys
- No real target recon or exploit functionality
- Security-related projects are educational/defensive only
- Datasets are synthetic and safe for public release
