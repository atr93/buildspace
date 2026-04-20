from __future__ import annotations

from .analyzer import KeyAnalysis


def format_report(analysis: KeyAnalysis) -> str:
  lines: list[str] = []
  lines.append("=== Crypto Key Analyzer (Educational) ===")
  lines.append("WARNING: Use dummy/sample keys only. No wallet recovery or cracking functionality is included.")
  lines.append("")
  lines.append(f"Hex key: {analysis.hex_key}")
  lines.append(f"Decimal: {analysis.decimal_value}")
  lines.append(f"Binary (first 96 bits): {analysis.binary_value[:96]}...")
  lines.append("")
  lines.append("Bit distribution")
  lines.append(f"- Ones: {analysis.ones}")
  lines.append(f"- Zeros: {analysis.zeros}")
  lines.append(f"- One ratio: {analysis.one_ratio:.4f}")
  lines.append(f"- Shannon entropy per bit: {analysis.entropy_per_bit:.4f}")
  lines.append("")
  lines.append("Repeating patterns (8-bit chunks)")
  if analysis.repeating_chunks:
    for chunk, count in analysis.repeating_chunks:
      lines.append(f"- {chunk}: {count} occurrences")
  else:
    lines.append("- No significant repeats detected.")
  lines.append("")
  lines.append("Prime factors of reduced projection (value % 10,000,019)")
  lines.append(f"- {analysis.prime_factors}")
  return "\n".join(lines)
