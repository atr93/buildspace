import { useMemo, useState } from 'react';
import { CategoryBreakdown } from './components/CategoryBreakdown';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { SummaryCards } from './components/SummaryCards';
import { loadExpenses, saveExpenses } from './utils/storage';
import { Expense } from './types';

const MONTHLY_BUDGET = 2200;

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => loadExpenses());

  const sortedExpenses = useMemo(
    () => [...expenses].sort((a, b) => b.date.localeCompare(a.date)),
    [expenses]
  );

  const addExpense = (expense: Expense) => {
    const next = [expense, ...expenses];
    setExpenses(next);
    saveExpenses(next);
  };

  const deleteExpense = (id: string) => {
    const next = expenses.filter((entry) => entry.id !== id);
    setExpenses(next);
    saveExpenses(next);
  };

  return (
    <main className="layout">
      <header className="card">
        <h1>Expense Flow Tracker</h1>
        <p>Track spending, budget health, and category trends with local-only data persistence.</p>
      </header>

      <SummaryCards expenses={expenses} monthlyBudget={MONTHLY_BUDGET} />

      <section className="grid">
        <ExpenseForm onAdd={addExpense} />
        <CategoryBreakdown expenses={expenses} />
      </section>

      <ExpenseList expenses={sortedExpenses} onDelete={deleteExpense} />
    </main>
  );
}

export default App;
