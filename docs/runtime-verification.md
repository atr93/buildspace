# Runtime Verification Guide

This guide is for developers cloning this repository on a normal machine with internet access.
It provides exact steps to verify that all apps run as intended.

## 1) Prerequisites

- Node.js 20+
- npm 10+
- Python 3.10+

Check versions:
```bash
node -v
npm -v
python3 --version
```

## 2) npm registry sanity check

If your network has custom proxy settings, run:
```bash
npm config set registry https://registry.npmjs.org/
npm cache clean --force
```

## 3) Quick offline repo integrity check (no internet required)

```bash
python3 scripts/offline_integrity_check.py
```

## 4) Verify all web apps (full runtime)

Run from repo root:

```bash
# Advanced
cd web-apps/advanced/admin-analytics-dashboard && npm install && npm run build && cd -
cd web-apps/advanced/secure-notes-app && npm install && npm run build && cd -
cd web-apps/advanced/network-traffic-dashboard && npm install && npm run build && cd -

# Intermediate
cd web-apps/intermediate/expense-flow-tracker && npm install && npm run build && cd -
cd web-apps/intermediate/rideflow-dispatch && npm install && npm run build && cd -
cd web-apps/intermediate/crypto-exchange-sim && npm install && npm run build && cd -
```

For local development servers, replace `npm run build` with `npm run dev`.

## 5) Verify Python tools

```bash
python3 python-tools/intermediate/log-analyzer-cli/src/main.py --file python-tools/intermediate/log-analyzer-cli/sample_data/app.log --top-ips 3
python3 python-tools/easy/quick-calc-cli/main.py op add 2 3
python3 python-tools/advanced/crypto-key-analyzer/main.py --key 0x1a2b3c
```

Optional dependencies for crypto analyzer:
```bash
pip install -r python-tools/advanced/crypto-key-analyzer/requirements.txt
```

## 6) Run CI-equivalent checks locally

```bash
python3 scripts/offline_integrity_check.py
python3 -m py_compile \
  python-tools/easy/quick-calc-cli/main.py \
  python-tools/intermediate/log-analyzer-cli/src/main.py \
  python-tools/advanced/crypto-key-analyzer/main.py
```

## Notes

- All projects use synthetic/mock data only.
- No credentials, secrets, or private endpoints are required.
- Security-adjacent projects are educational and defensive in scope.


## 7) Verify MVC Core apps (server-rendered)

```bash
cd mvc-core/AdminOpsDashboard.Mvc && dotnet restore && dotnet run && cd -
cd mvc-core/ExpenseFlow.Mvc && dotnet restore && dotnet run && cd -
cd mvc-core/RideFlowDispatch.Mvc && dotnet restore && dotnet run && cd -
```

