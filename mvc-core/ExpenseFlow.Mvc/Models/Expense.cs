namespace ExpenseFlow.Mvc.Models;

public record Expense(string Title, string Category, decimal Amount, DateOnly Date);

public class ExpenseViewModel
{
    public decimal Budget { get; init; }
    public IReadOnlyList<Expense> Expenses { get; init; } = Array.Empty<Expense>();
    public decimal Total => Expenses.Sum(e => e.Amount);
    public decimal Remaining => Budget - Total;
}
