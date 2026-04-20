#!/usr/bin/env python3
"""Educational crypto private key analyzer (dummy/sample keys only)."""

from __future__ import annotations

import argparse
from modules.analyzer import analyze_key
from modules.converter import normalize_hex_key
from modules.utils import format_report


def build_parser() -> argparse.ArgumentParser:
  parser = argparse.ArgumentParser(description="Analyze a hex private key for educational metrics.")
  parser.add_argument("--key", required=True, help="Hex private key string, with or without 0x prefix")
  parser.add_argument("--bits", type=int, default=256, choices=[128, 192, 256, 384, 521], help="Expected key width")
  return parser


def main() -> None:
  parser = build_parser()
  args = parser.parse_args()

  try:
    normalized = normalize_hex_key(args.key, args.bits)
    analysis = analyze_key(normalized, args.bits)
  except ValueError as error:
    parser.error(str(error))
    return

  print(format_report(analysis))


if __name__ == "__main__":
  main()
