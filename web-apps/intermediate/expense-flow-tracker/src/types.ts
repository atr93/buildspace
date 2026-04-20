export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: 'Food' | 'Transport' | 'Housing' | 'Utilities' | 'Health' | 'Other';
  date: string;
};
