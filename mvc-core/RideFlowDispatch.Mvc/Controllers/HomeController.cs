using Microsoft.AspNetCore.Mvc;
using RideFlowDispatch.Mvc.Models;

namespace RideFlowDispatch.Mvc.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var model = new RideDispatchViewModel
        {
            Rides =
            [
                new("R-1102", "A. Gomez", "Downtown Hub", "Riverside Ave", 14.20m, "Pending", null),
                new("R-1103", "D. Chen", "North Station", "Lakeview Park", 21.50m, "Assigned", "Mia K."),
                new("R-1104", "R. Patel", "City Mall", "Tech District", 11.80m, "In Progress", "Andre T."),
                new("R-1101", "J. Lee", "West End", "Airport Terminal B", 32.40m, "Completed", "Sara W.")
            ]
        };

        return View(model);
    }
}
