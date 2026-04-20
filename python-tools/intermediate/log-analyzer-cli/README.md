# Log Analyzer CLI

Parse structured log files, produce a concise report, and surface anomaly hints in a safe, defensive workflow.

## Why this project
- Shows practical Python CLI design
- Demonstrates parsing, validation, and reporting
- Adds security-adjacent analysis without offensive behavior

## Expected Log Format
```text
<timestamp> <LEVEL> ip=<IPv4/IPv6> service=<service-name> msg=<message>
```

## Usage
```bash
python3 src/main.py --file sample_data/app.log
python3 src/main.py --file sample_data/app.log --top-ips 5
```

## Output includes
- total record count
- severity distribution
- top services
- top source IPs
- anomaly hints (error ratio, IP concentration, critical events)

## Public Safety
- No target scanning
- No exploit logic
- Offline analysis of local sample logs only
