# Portfolio Lab Overview

This monorepo is designed as a **public-facing, professional portfolio** with breadth across web, mobile, Python tooling, business utilities, and interactive projects.

All projects are intentionally:
- public-safe
- practical
- small to medium scope
- documented and runnable

## Planned Repository Structure

```text
portfolio-lab/
├── web-apps/
│   ├── easy/
│   │   ├── quick-calc-web
│   │   └── password-strength-studio
│   ├── intermediate/
│   │   ├── expense-flow-tracker
│   │   └── taskboard-lite
│   └── advanced/
│       ├── admin-analytics-dashboard
│   │   ├── rideflow-dispatch
│   │   ├── crypto-exchange-sim
│   │   └── taskboard-lite
│   └── advanced/
│       ├── admin-analytics-dashboard
│       ├── secure-notes-app
│       ├── network-traffic-dashboard
│       └── inventory-insight-hub
├── mobile-apps/
│   ├── cross-platform/
│   │   ├── habit-pulse-mobile
│   │   └── secure-notes-demo
│   ├── android-first/
│   │   └── workout-log-android
│   └── ios-first/
│       └── expense-journal-ios
├── python-tools/
│   ├── easy/
│   │   ├── file-organizer-cli
│   │   └── log-parser-cli
│   ├── intermediate/
│   │   ├── csv-analyzer-tool
│   │   └── password-analyzer
│   └── advanced/
│       ├── anomaly-detector-lab
│       └── crypto-address-demo-toolkit
├── business-apps/
│   ├── invoice-generator-pro
│   ├── crm-lite-console
│   ├── appointment-scheduler-demo
│   └── stock-ops-tracker
├── games/
│   ├── snake-neon
│   ├── tictactoe-pro
│   └── type-rush
├── shared/
│   └── screenshots/
├── mvc-core/
│   ├── AdminOpsDashboard.Mvc
│   ├── ExpenseFlow.Mvc
│   └── RideFlowDispatch.Mvc
├── docs/
│   └── overview.md
└── .github/workflows/
    └── ci.yml
```

## Shortlist of Chosen Projects

### Web Apps (6)
| Project | Stack | Difficulty | Why It Belongs |
|---|---|---:|---|
| quick-calc-web | HTML/CSS/JS | Easy | Shows clean UX and core frontend basics. |
| password-strength-studio | React + TS | Easy | Security-adjacent validation and real-time feedback. |
| expense-flow-tracker | React + TS | Intermediate | Practical state management and reporting UI. |
| taskboard-lite | React + TS + local storage | Intermediate | CRUD interactions with persistence. |
| admin-analytics-dashboard | React + TS + Vite | Advanced | Data-driven dashboard patterns and reusable components. |
| inventory-insight-hub | React + TS + mock API | Advanced | Business-focused workflows with table filtering and KPIs. |

### Mobile Apps (4)
| Project | Stack | Difficulty | Why It Belongs |
|---|---|---:|---|
| habit-pulse-mobile | React Native (Expo) | Intermediate | Cross-platform productivity utility. |
| secure-notes-demo | React Native (Expo) | Intermediate | Security-adjacent local-only note handling. |
| workout-log-android | React Native (Android-first config) | Intermediate | Platform-focused UX and offline tracking. |
| expense-journal-ios | React Native (iOS-first config) | Intermediate | iOS-oriented finance journaling experience. |

### Python Tools (6)
| Project | Stack | Difficulty | Why It Belongs |
|---|---|---:|---|
| file-organizer-cli | Python 3 | Easy | Real-world automation utility. |
| log-parser-cli | Python 3 | Easy | Practical text processing and summary reports. |
| csv-analyzer-tool | Python + pandas | Intermediate | Data profiling and insight extraction. |
| password-analyzer | Python | Intermediate | Defensive password audit and entropy scoring. |
| anomaly-detector-lab | Python + scikit-learn | Advanced | Data science and ML fundamentals. |
| crypto-address-demo-toolkit | Python | Advanced | Safe parsing/validation utilities with dummy data only. |

### Business / Productivity (4)
| Project | Stack | Difficulty | Why It Belongs |
|---|---|---:|---|
| invoice-generator-pro | React + TS | Intermediate | Client-facing utility with printable output. |
| crm-lite-console | React + TS | Intermediate | Sales pipeline and contact management patterns. |
| appointment-scheduler-demo | React + TS | Intermediate | Calendar/state coordination for business workflows. |
| stock-ops-tracker | React + TS | Intermediate | Inventory and reorder workflow simulation. |

### Games / Interactive (3)
| Project | Stack | Difficulty | Why It Belongs |
|---|---|---:|---|
| snake-neon | HTML/CSS/JS Canvas | Easy | Interactive logic and animation loop fundamentals. |
| tictactoe-pro | React + TS | Easy | Turn-based state control and validation. |
| type-rush | React + TS | Intermediate | Timing, scoring, and UX polish in an interactive app. |

## Build Sequence
1. Root portfolio docs and standards
2. Featured advanced web project (admin-analytics-dashboard)
3. Remaining web apps
4. Python tools
5. Business apps
6. Mobile apps
7. Games
8. CI and consistency pass

## Implemented in Current Iteration

- `web-apps/advanced/admin-analytics-dashboard`
- `web-apps/intermediate/expense-flow-tracker`
- `web-apps/advanced/secure-notes-app`
- `web-apps/advanced/network-traffic-dashboard`
- `web-apps/intermediate/expense-flow-tracker`
- `web-apps/intermediate/rideflow-dispatch`
- `web-apps/intermediate/crypto-exchange-sim`
- `python-tools/advanced/crypto-key-analyzer`
- `python-tools/intermediate/log-analyzer-cli`
- `python-tools/easy/quick-calc-cli`
- `mvc-core/AdminOpsDashboard.Mvc`
- `mvc-core/ExpenseFlow.Mvc`
- `mvc-core/RideFlowDispatch.Mvc`


## Verification

For full local runtime verification steps, see `docs/runtime-verification.md`.
