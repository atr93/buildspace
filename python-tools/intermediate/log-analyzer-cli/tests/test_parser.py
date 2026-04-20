from src.main import parse_line


def test_parse_line_valid():
    line = "2026-04-20T08:01:04Z INFO ip=10.10.1.10 service=auth msg=login success"
    parsed = parse_line(line)

    assert parsed.level == "INFO"
    assert parsed.ip == "10.10.1.10"
    assert parsed.service == "auth"
