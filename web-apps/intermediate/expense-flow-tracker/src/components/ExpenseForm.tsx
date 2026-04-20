import { FormEvent, useState } from 'react';
import { Expense } from '../types';

type ExpenseFormProps = {
  onAdd: (expense: Expense) => void;
};

const categories: Expense['category'][] = ['Food', 'Transport', 'Housing', 'Utilities', 'Health', 'Other'];

export function ExpenseForm({ onAdd }: ExpenseFormProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<Expense['category']>('Food');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError('');

    const parsedAmount = Number(amount);
    if (!title.trim()) return setError('Title is required.');
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) return setError('Amount must be greater than 0.');

    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      amount: parsedAmount,
      category,
      date
    });

    setTitle('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <label>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Groceries" />
      </label>
      <label>
        Amount
        <input type="number" min="0.01" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value as Expense['category'])}>
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        Date
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit">Save Expense</button>
    </form>
  );
}
