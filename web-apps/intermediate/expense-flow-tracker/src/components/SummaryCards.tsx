import { Expense } from '../types';

type SummaryCardsProps = {
  expenses: Expense[];
  monthlyBudget: number;
};

export function SummaryCards({ expenses, monthlyBudget }: SummaryCardsProps) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  const remaining = monthlyBudget - total;
  const usage = Math.min((total / monthlyBudget) * 100, 100);

  return (
    <section className="summary-grid">
      <article className="card"><h3>Total Spent</h3><p>${total.toFixed(2)}</p></article>
      <article className="card"><h3>Monthly Budget</h3><p>${monthlyBudget.toFixed(2)}</p></article>
      <article className="card"><h3>Remaining</h3><p className={remaining < 0 ? 'negative' : 'positive'}>${remaining.toFixed(2)}</p></article>
      <article className="card"><h3>Budget Usage</h3><div className="progress"><div style={{ width: `${usage}%` }} /></div><p>{usage.toFixed(1)}%</p></article>
    </section>
  );
}
