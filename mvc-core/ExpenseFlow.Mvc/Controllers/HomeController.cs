using ExpenseFlow.Mvc.Models;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseFlow.Mvc.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var model = new ExpenseViewModel
        {
            Budget = 2200,
            Expenses =
            [
                new("Groceries", "Food", 118.50m, DateOnly.FromDateTime(DateTime.UtcNow.AddDays(-2))),
                new("Metro", "Transport", 41.00m, DateOnly.FromDateTime(DateTime.UtcNow.AddDays(-1))),
                new("Internet", "Utilities", 72.99m, DateOnly.FromDateTime(DateTime.UtcNow))
            ]
        };

        return View(model);
    }
}
