"use client";

import Link from "next/link";
import { Dispute } from "@/lib/types";
import { money, pct } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/Table";

function riskTone(r: Dispute["risk"]) {
  if (r === "high") return "red";
  if (r === "med") return "yellow";
  return "green";
}

export function DisputeTable({ rows }: { rows: Dispute[] }) {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Dispute</TH>
          <TH>Property</TH>
          <TH>Stage</TH>
          <TH>Risk</TH>
          <TH>Settle (90d)</TH>
          <TH>Settlement Range</TH>
          <TH>Time to Resolve</TH>
        </TR>
      </THead>
      <TBody>
        {rows.map((d) => (
          <TR key={d.id}>
            <TD className="font-medium">
              <Link
                className="underline underline-offset-2"
                href={`/disputes/${encodeURIComponent(d.id)}`}
              >
                {d.id}
              </Link>
              <div className="text-xs text-gray-500">{d.title}</div>
            </TD>
            <TD>
              {d.propertyName}
              <div className="text-xs text-gray-500">
                {d.city}, {d.state}
              </div>
            </TD>
            <TD>{d.stage}</TD>
            <TD>
              <Badge tone={riskTone(d.risk) as never}>{d.risk.toUpperCase()}</Badge>
            </TD>
            <TD className="font-semibold">{pct(d.settle90dProb)}</TD>
            <TD>
              {money(d.settleP10)} – {money(d.settleP90)}
            </TD>
            <TD>
              {d.monthsMid.toFixed(1)} mo{" "}
              <span className="text-xs text-gray-500">
                ({d.monthsP10.toFixed(1)}–{d.monthsP90.toFixed(1)})
              </span>
            </TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}
