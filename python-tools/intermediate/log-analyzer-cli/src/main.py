#!/usr/bin/env python3
"""Log Analyzer CLI: parse log files, summarize levels, and flag anomaly hints."""

from __future__ import annotations

import argparse
import collections
import ipaddress
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

LINE_PATTERN = re.compile(
    r"^(?P<timestamp>\S+)\s+(?P<level>INFO|WARN|ERROR|CRITICAL)\s+ip=(?P<ip>\S+)\s+service=(?P<service>\S+)\s+msg=(?P<message>.+)$"
)


@dataclass
class LogRecord:
    timestamp: str
    level: str
    ip: str
    service: str
    message: str


class ParseError(Exception):
    """Raised when the provided log file cannot be parsed."""


def parse_line(line: str) -> LogRecord:
    match = LINE_PATTERN.match(line.strip())
    if not match:
        raise ParseError(f"Invalid log line format: {line.strip()}")

    ip = match.group("ip")
    try:
        ipaddress.ip_address(ip)
    except ValueError as exc:
        raise ParseError(f"Invalid IP address '{ip}'") from exc

    return LogRecord(
        timestamp=match.group("timestamp"),
        level=match.group("level"),
        ip=ip,
        service=match.group("service"),
        message=match.group("message"),
    )


def read_records(path: Path) -> list[LogRecord]:
    if not path.exists():
        raise FileNotFoundError(f"Log file not found: {path}")

    records: list[LogRecord] = []
    for number, line in enumerate(path.read_text().splitlines(), start=1):
        if not line.strip() or line.strip().startswith("#"):
            continue
        try:
            records.append(parse_line(line))
        except ParseError as exc:
            raise ParseError(f"Line {number}: {exc}") from exc

    if not records:
        raise ParseError("No valid records found.")

    return records


def summarize(records: Iterable[LogRecord], top_ips: int) -> str:
    records = list(records)
    levels = collections.Counter(item.level for item in records)
    services = collections.Counter(item.service for item in records)
    ips = collections.Counter(item.ip for item in records)

    error_like = levels["ERROR"] + levels["CRITICAL"]
    total = len(records)
    error_ratio = error_like / total

    lines: list[str] = []
    lines.append("=== Log Analyzer Report ===")
    lines.append(f"Total records: {total}")
    lines.append(f"Severity counts: {dict(levels)}")
    lines.append(f"Top services: {services.most_common(3)}")
    lines.append(f"Top IPs: {ips.most_common(top_ips)}")

    anomaly_hints: list[str] = []
    if error_ratio > 0.35:
        anomaly_hints.append(f"High error ratio detected ({error_ratio:.1%}).")

    if any(count >= 4 for _, count in ips.most_common(3)):
        anomaly_hints.append("One or more IPs appear unusually frequently.")

    if levels["CRITICAL"] > 0:
        anomaly_hints.append("Critical events present; prioritize immediate triage.")

    lines.append("Anomaly hints:")
    if anomaly_hints:
        lines.extend([f"- {hint}" for hint in anomaly_hints])
    else:
        lines.append("- No immediate anomaly hints detected.")

    return "\n".join(lines)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Analyze structured logs and emit anomaly hints.")
    parser.add_argument("--file", required=True, type=Path, help="Path to a structured log file")
    parser.add_argument("--top-ips", type=int, default=3, help="Number of top IPs to display")
    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    try:
        records = read_records(args.file)
        report = summarize(records, top_ips=max(args.top_ips, 1))
    except (FileNotFoundError, ParseError) as exc:
        parser.error(str(exc))
        return

    print(report)


if __name__ == "__main__":
    main()
