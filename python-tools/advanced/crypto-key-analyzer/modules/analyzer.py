from __future__ import annotations

from collections import Counter
from dataclasses import dataclass
from math import log2
from typing import Any

try:
  import numpy as np
except Exception:  # Optional dependency fallback
  np = None

try:
  from sympy import factorint
except Exception:  # Optional dependency fallback
  factorint = None

from .converter import to_binary, to_decimal


@dataclass
class KeyAnalysis:
  hex_key: str
  decimal_value: int
  binary_value: str
  ones: int
  zeros: int
  one_ratio: float
  entropy_per_bit: float
  repeating_chunks: list[tuple[str, int]]
  prime_factors: dict[int, int]


def shannon_entropy(binary: str) -> float:
  total = len(binary)
  ones = binary.count("1")
  zeros = total - ones
  probabilities = [count / total for count in (ones, zeros) if count > 0]
  return -sum(p * log2(p) for p in probabilities)


def chunk_patterns(binary: str, chunk_size: int = 8) -> list[tuple[str, int]]:
  chunks = [binary[index:index + chunk_size] for index in range(0, len(binary), chunk_size)]

  if np is not None:
    unique, counts = np.unique(chunks, return_counts=True)
    pairs = sorted(zip(unique.tolist(), counts.tolist()), key=lambda item: item[1], reverse=True)
    return [(pattern, int(count)) for pattern, count in pairs[:5] if count > 1]

  counter = Counter(chunks)
  return [(pattern, count) for pattern, count in counter.most_common(5) if count > 1]


def reduced_factorization(value: int) -> dict[int, int]:
  if factorint is not None:
    return {int(k): int(v) for k, v in factorint(value).items()}

  factors: dict[int, int] = {}
  n = value
  divisor = 2
  while divisor * divisor <= n:
    while n % divisor == 0:
      factors[divisor] = factors.get(divisor, 0) + 1
      n //= divisor
    divisor += 1 if divisor == 2 else 2
  if n > 1:
    factors[n] = factors.get(n, 0) + 1
  return factors


def analyze_key(hex_key: str, bits: int) -> KeyAnalysis:
  decimal_value = to_decimal(hex_key)
  binary_value = to_binary(hex_key)
  if len(binary_value) != bits:
    raise ValueError(f"Normalized key does not match requested width ({bits} bits).")

  ones = binary_value.count("1")
  zeros = bits - ones
  one_ratio = ones / bits
  entropy = shannon_entropy(binary_value)
  repeating = chunk_patterns(binary_value)

  projected = decimal_value % 10_000_019
  factors = reduced_factorization(projected)

  return KeyAnalysis(
    hex_key=hex_key,
    decimal_value=decimal_value,
    binary_value=binary_value,
    ones=ones,
    zeros=zeros,
    one_ratio=one_ratio,
    entropy_per_bit=entropy,
    repeating_chunks=repeating,
    prime_factors=factors,
  )


def to_dict(analysis: KeyAnalysis) -> dict[str, Any]:
  return {
    "hex_key": analysis.hex_key,
    "decimal_value": analysis.decimal_value,
    "binary_preview": f"{analysis.binary_value[:64]}...",
    "ones": analysis.ones,
    "zeros": analysis.zeros,
    "one_ratio": round(analysis.one_ratio, 4),
    "entropy_per_bit": round(analysis.entropy_per_bit, 4),
    "repeating_chunks": analysis.repeating_chunks,
    "prime_factors_projection": analysis.prime_factors,
  }
