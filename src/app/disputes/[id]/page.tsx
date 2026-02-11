import { notFound } from "next/navigation";
import { disputes, events } from "@/lib/mockData";
import { PredictionTiles } from "@/components/disputes/PredictionTiles";
import { ScenarioPanel } from "@/components/disputes/ScenarioPanel";
import { EventTimeline } from "@/components/disputes/EventTimeline";
import { Badge } from "@/components/ui/Badge";

export default function DisputeDetailPage({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);
  const d = disputes.find((x) => x.id === id);

  if (!d) return notFound();

  const ev = events
    .filter((e) => e.disputeId === d.id)
    .sort((a, b) => a.ts.localeCompare(b.ts));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xs text-gray-500">
            {d.propertyName} · {d.city}, {d.state}
          </div>
          <h1 className="text-xl font-semibold">{d.title}</h1>
          <div className="mt-2 flex items-center gap-2">
            <Badge tone={d.risk === "high" ? "red" : d.risk === "med" ? "yellow" : "green"}>
              {d.risk.toUpperCase()}
            </Badge>
            <Badge tone="gray">{d.stage}</Badge>
            {d.insuranceInvolved ? <Badge tone="gray">Insurance</Badge> : null}
          </div>
        </div>

        <div className="text-xs text-gray-500">
          Last activity: {new Date(d.lastActivityAt).toLocaleString()}
        </div>
      </div>

      <PredictionTiles d={d} />

      <div className="grid gap-6 lg:grid-cols-2">
        <ScenarioPanel d={d} />
        <EventTimeline events={ev} />
      </div>
    </div>
  );
}
