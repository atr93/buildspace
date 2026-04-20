namespace RideFlowDispatch.Mvc.Models;

public record Ride(string Id, string Rider, string Pickup, string Dropoff, decimal Fare, string Status, string? Driver);

public class RideDispatchViewModel
{
    public IReadOnlyList<Ride> Rides { get; init; } = Array.Empty<Ride>();
    public int Active => Rides.Count(x => !string.Equals(x.Status, "Completed", StringComparison.OrdinalIgnoreCase));
    public int Completed => Rides.Count(x => string.Equals(x.Status, "Completed", StringComparison.OrdinalIgnoreCase));
}
