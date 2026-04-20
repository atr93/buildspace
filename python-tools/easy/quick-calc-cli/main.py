#!/usr/bin/env python3
"""Quick Calc CLI: simple validated arithmetic utility."""

from __future__ import annotations

import argparse
import ast
import operator

OPS = {
    "add": operator.add,
    "sub": operator.sub,
    "mul": operator.mul,
    "div": operator.truediv,
}


class SafeEval(ast.NodeVisitor):
    allowed = (ast.Expression, ast.BinOp, ast.UnaryOp, ast.Constant, ast.Add, ast.Sub, ast.Mult, ast.Div, ast.USub)

    def visit(self, node):  # type: ignore[override]
        if not isinstance(node, self.allowed):
            raise ValueError("Expression includes unsupported syntax")
        return super().visit(node)


def eval_expression(expression: str) -> float:
    tree = ast.parse(expression, mode="eval")
    SafeEval().visit(tree)
    return float(eval(compile(tree, "<expr>", "eval"), {"__builtins__": {}}, {}))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Quick calculator CLI")
    sub = parser.add_subparsers(dest="mode", required=True)

    command = sub.add_parser("op", help="Run operation mode")
    command.add_argument("operation", choices=OPS.keys())
    command.add_argument("a", type=float)
    command.add_argument("b", type=float)

    expr = sub.add_parser("expr", help="Evaluate a safe arithmetic expression")
    expr.add_argument("expression")

    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    if args.mode == "op":
        if args.operation == "div" and args.b == 0:
            parser.error("Division by zero is not allowed.")
        result = OPS[args.operation](args.a, args.b)
        print(f"Result: {result}")
        return

    try:
        result = eval_expression(args.expression)
    except Exception as exc:
        parser.error(f"Invalid expression: {exc}")
        return

    print(f"Result: {result}")


if __name__ == "__main__":
    main()
