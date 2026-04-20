from __future__ import annotations

import re

HEX_PATTERN = re.compile(r"^[0-9a-fA-F]+$")


def normalize_hex_key(raw_key: str, bits: int) -> str:
  value = raw_key.strip().lower().removeprefix("0x")
  if not value:
    raise ValueError("Key input cannot be empty.")
  if not HEX_PATTERN.match(value):
    raise ValueError("Key must be a valid hexadecimal string.")

  max_len = bits // 4
  if len(value) > max_len:
    raise ValueError(f"Key is too long for {bits}-bit width.")

  return value.zfill(max_len)


def to_decimal(hex_key: str) -> int:
  return int(hex_key, 16)


def to_binary(hex_key: str) -> str:
  return bin(int(hex_key, 16))[2:].zfill(len(hex_key) * 4)
