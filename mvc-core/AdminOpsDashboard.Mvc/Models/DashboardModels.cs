namespace AdminOpsDashboard.Mvc.Models;

public record Kpi(string Label, string Value, string Delta);
public record Incident(string Id, string Title, string Severity, string Owner, string Status);

public class DashboardViewModel
{
    public IReadOnlyList<Kpi> Kpis { get; init; } = Array.Empty<Kpi>();
    public IReadOnlyList<Incident> Incidents { get; init; } = Array.Empty<Incident>();
}
