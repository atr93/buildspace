import { Expense } from '../types';

const STORAGE_KEY = 'expense-flow-tracker-v1';

export function loadExpenses(): Expense[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as Expense[];
    return parsed.filter((entry) => entry.title && entry.amount > 0 && entry.date);
  } catch {
    return [];
  }
}

export function saveExpenses(entries: Expense[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
