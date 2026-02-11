import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { money, pct } from "@/lib/utils";
import { Dispute } from "@/lib/types";

export function PredictionTiles({ d }: { d: Dispute }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Settle in next 90 days</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-semibold">{pct(d.settle90dProb)}</div>
          <div className="mt-2 text-xs text-gray-500">Confidence: Medium (mock)</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Settlement range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-semibold">
            {money(d.settleP10)} – {money(d.settleP90)}
          </div>
          <div className="mt-2 text-xs text-gray-500">Midpoint: {money(d.settleMid)}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Time to resolution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-semibold">{d.monthsMid.toFixed(1)} mo</div>
          <div className="mt-2 text-xs text-gray-500">
            Range: {d.monthsP10.toFixed(1)}–{d.monthsP90.toFixed(1)} mo
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
