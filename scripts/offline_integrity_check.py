#!/usr/bin/env python3
"""Offline structural validation for portfolio projects.

This does not require npm/pip network access. It validates that each project has
minimum required files and expected npm scripts.
"""

from __future__ import annotations

import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]

WEB_APPS = [
    'web-apps/advanced/admin-analytics-dashboard',
    'web-apps/advanced/secure-notes-app',
    'web-apps/advanced/network-traffic-dashboard',
    'web-apps/intermediate/expense-flow-tracker',
    'web-apps/intermediate/rideflow-dispatch',
    'web-apps/intermediate/crypto-exchange-sim',
]

PY_TOOLS = [
    'python-tools/easy/quick-calc-cli/main.py',
    'python-tools/intermediate/log-analyzer-cli/src/main.py',
    'python-tools/advanced/crypto-key-analyzer/main.py',
]


def fail(message: str) -> None:
    print(f"[FAIL] {message}")
    sys.exit(1)


def validate_web_app(path_str: str) -> None:
    path = ROOT / path_str
    required = [
        path / 'package.json',
        path / 'index.html',
        path / 'tsconfig.json',
        path / 'vite.config.ts',
        path / 'src/main.tsx',
        path / 'src/App.tsx',
        path / 'README.md',
    ]

    missing = [str(item.relative_to(ROOT)) for item in required if not item.exists()]
    if missing:
        fail(f"Missing files in {path_str}: {missing}")

    package = json.loads((path / 'package.json').read_text())
    scripts = package.get('scripts', {})

    for script in ('dev', 'build', 'preview'):
        if script not in scripts:
            fail(f"{path_str}/package.json missing scripts.{script}")

    print(f"[OK] {path_str} structure and scripts")


def validate_python_tool(path_str: str) -> None:
    target = ROOT / path_str
    if not target.exists():
        fail(f"Missing Python entrypoint: {path_str}")
    print(f"[OK] {path_str}")


def main() -> None:
    print('Running offline integrity checks...')

    for app in WEB_APPS:
        validate_web_app(app)

    for tool in PY_TOOLS:
        validate_python_tool(tool)

    print('All offline checks passed.')


if __name__ == '__main__':
    main()
