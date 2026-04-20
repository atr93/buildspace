import { Expense } from '../types';

type ExpenseListProps = {
  expenses: Expense[];
  onDelete: (id: string) => void;
};

export function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  if (expenses.length === 0) return <section className="card"><p>No expenses yet. Add your first entry.</p></section>;

  return (
    <section className="card">
      <h2>Recent Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div>
              <strong>{expense.title}</strong>
              <p>{expense.category} · {expense.date}</p>
            </div>
            <div className="row-end">
              <span>${expense.amount.toFixed(2)}</span>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
