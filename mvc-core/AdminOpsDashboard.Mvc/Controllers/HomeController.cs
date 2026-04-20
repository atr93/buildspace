using AdminOpsDashboard.Mvc.Models;
using Microsoft.AspNetCore.Mvc;

namespace AdminOpsDashboard.Mvc.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var model = new DashboardViewModel
        {
            Kpis =
            [
                new("Active Users", "12,840", "+8.4%"),
                new("Uptime", "99.94%", "+0.2%"),
                new("Avg Response", "236ms", "-5.1%"),
                new("Security Events", "19", "-12.5%")
            ],
            Incidents =
            [
                new("INC-2038", "Failed login spike", "Critical", "Marcus T.", "Open"),
                new("INC-2041", "Token refresh retries elevated", "Medium", "Priya S.", "Monitoring"),
                new("INC-2033", "Analytics ingestion delay", "Low", "Nina L.", "Resolved")
            ]
        };

        return View(model);
    }
}
