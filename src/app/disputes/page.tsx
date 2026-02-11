"use client";

import { useMemo, useState } from "react";
import { disputes as seed } from "@/lib/mockData";
import { DisputeFilters } from "@/components/disputes/DisputeFilters";
import { DisputeTable } from "@/components/disputes/DisputeTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function DisputesPage() {
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return seed;
    return seed.filter((d) =>
      [d.id, d.title, d.propertyName, d.city, d.state].some((x) =>
        x.toLowerCase().includes(s),
      ),
    );
  }, [q]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold">Disputes</h1>
        <p className="text-sm text-gray-500">
          Filter and open a dispute to view predictions and scenarios.
        </p>
      </div>

      <DisputeFilters onSearch={setQ} />

      <Card>
        <CardHeader>
          <CardTitle>All disputes</CardTitle>
        </CardHeader>
        <CardContent>
          <DisputeTable rows={rows} />
        </CardContent>
      </Card>
    </div>
  );
}
