"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { money, pct } from "@/lib/utils";
import { Dispute } from "@/lib/types";

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

export function ScenarioPanel({ d }: { d: Dispute }) {
  const [offer, setOffer] = useState(d.offer ?? 0);
  const [demand, setDemand] = useState(d.demand ?? 0);
  const [authority, setAuthority] = useState(d.authorityLimit ?? 0);

  // Mock “what-if” recalculation (replace with API call later)
  const scenario = useMemo(() => {
    const gap = demand > 0 ? (demand - offer) / demand : 0;
    const authRatio = demand > 0 ? authority / demand : 0;

    const prob = clamp01(
      d.settle90dProb + (0.15 - gap * 0.2) + (authRatio - 0.75) * 0.1,
    );
    const mid = d.settleMid + (offer - (d.offer ?? 0)) * 0.25;
    const months = Math.max(2, d.monthsMid + (gap - 0.3) * 2);

    return { prob, mid, gap, authRatio, months };
  }, [offer, demand, authority, d]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Scenario modeling (what-if)</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">Save as plan</Button>
            <Button>Apply to record</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-3">
          <div>
            <div className="text-xs text-gray-500">Offer</div>
            <Input
              type="number"
              value={offer}
              onChange={(e) => setOffer(Number(e.target.value))}
            />
          </div>
          <div>
            <div className="text-xs text-gray-500">Demand</div>
            <Input
              type="number"
              value={demand}
              onChange={(e) => setDemand(Number(e.target.value))}
            />
          </div>
          <div>
            <div className="text-xs text-gray-500">Authority limit</div>
            <Input
              type="number"
              value={authority}
              onChange={(e) => setAuthority(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border bg-gray-50 p-3">
            <div className="text-xs text-gray-500">Settle (90d)</div>
            <div className="text-lg font-semibold">{pct(scenario.prob)}</div>
          </div>
          <div className="rounded-xl border bg-gray-50 p-3">
            <div className="text-xs text-gray-500">Settlement midpoint (mock)</div>
            <div className="text-lg font-semibold">
              {money(Math.max(0, scenario.mid))}
            </div>
          </div>
          <div className="rounded-xl border bg-gray-50 p-3">
            <div className="text-xs text-gray-500">Time to resolve (mock)</div>
            <div className="text-lg font-semibold">{scenario.months.toFixed(1)} mo</div>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-500">
          Gap ratio: {scenario.gap.toFixed(2)} · Authority ratio: {scenario.authRatio.toFixed(2)}
          (mock logic — replace with model API)
        </div>
      </CardContent>
    </Card>
  );
}
