import { Expense } from '../types';

type CategoryBreakdownProps = {
  expenses: Expense[];
};

export function CategoryBreakdown({ expenses }: CategoryBreakdownProps) {
  const totals = expenses.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + item.amount;
    return acc;
  }, {});

  const rows = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const max = rows[0]?.[1] ?? 1;

  return (
    <section className="card">
      <h2>Category Breakdown</h2>
      {rows.length === 0 ? <p>No category data yet.</p> : (
        <ul className="bars">
          {rows.map(([category, value]) => (
            <li key={category}>
              <span>{category}</span>
              <div className="bar-track"><div className="bar" style={{ width: `${(value / max) * 100}%` }} /></div>
              <strong>${value.toFixed(2)}</strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
