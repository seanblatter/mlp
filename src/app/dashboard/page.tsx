import { KpiCard } from "@/components/kpi/KpiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { disputes } from "@/lib/mockData";
import { money, pct } from "@/lib/utils";

export default function DashboardPage() {
  const active = disputes.length;
  const exposure = disputes.reduce((s, d) => s + d.settleMid, 0);
  const settle90 =
    disputes.reduce((s, d) => s + d.settle90dProb, 0) / Math.max(1, disputes.length);
  const avgMonths =
    disputes.reduce((s, d) => s + d.monthsMid, 0) / Math.max(1, disputes.length);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Property dispute forecasting and triage.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <KpiCard title="Active disputes" value={`${active}`} />
        <KpiCard
          title="Estimated exposure"
          value={money(exposure)}
          sub="Sum of midpoint forecasts"
        />
        <KpiCard
          title="90-day settlement likelihood"
          value={pct(settle90)}
          sub="Weighted avg (mock)"
        />
        <KpiCard
          title="Avg time-to-resolution"
          value={`${avgMonths.toFixed(1)} mo`}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>At risk this week</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600">
          Plug in your “risk rules” here (e.g., high risk + low authority ratio + overdue
          last activity).
        </CardContent>
      </Card>
    </div>
  );
}
