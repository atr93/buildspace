# Crypto Key Analyzer

Educational Python CLI for analyzing *dummy/sample* cryptographic private key strings.

## Purpose
Demonstrates numerical conversion and statistical analysis techniques for security-oriented tooling.

## Safety
- Educational analysis only
- No brute force, cracking, wallet generation, or attack functionality
- Never use real wallet/private keys in public tools

## Features
- Accepts hex key input (`--key`)
- Converts to decimal + fixed-width binary
- Computes bit distribution and Shannon entropy
- Detects repeating 8-bit chunk patterns
- Provides a reduced prime-factor projection for mathematical fingerprinting

## Usage
```bash
python3 main.py --key 0x1a2b3c
python3 main.py --key deadbeef --bits 256
```

## Structure
```text
crypto-key-analyzer/
├── main.py
├── requirements.txt
├── README.md
└── modules/
    ├── __init__.py
    ├── converter.py
    ├── analyzer.py
    └── utils.py
```

## Future Improvements
- Add CSV report output mode
- Add optional histogram visualization
- Add automated test coverage for entropy/pattern calculations


## Optional deps
If `numpy`/`sympy` are unavailable in restricted environments, the tool falls back to standard-library implementations.
