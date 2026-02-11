import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { DisputeEvent } from "@/lib/types";
import { money } from "@/lib/utils";

export function EventTimeline({ events }: { events: DisputeEvent[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-3">
          {events.map((e) => (
            <li key={e.id} className="rounded-xl border bg-white p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">{e.type}</div>
                <div className="text-xs text-gray-500">
                  {new Date(e.ts).toLocaleString()}
                </div>
              </div>
              {typeof e.amount === "number" ? (
                <div className="mt-1 text-sm">{money(e.amount)}</div>
              ) : null}
              {e.note ? <div className="mt-1 text-xs text-gray-600">{e.note}</div> : null}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
