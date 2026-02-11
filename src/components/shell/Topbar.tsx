"use client";

import { Button } from "@/components/ui/Button";

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-4 py-3">
      <div className="text-sm text-gray-600">Portfolio: Midwest Commercial</div>
      <div className="flex items-center gap-2">
        <Button variant="outline">Export</Button>
        <Button>New Dispute</Button>
      </div>
    </header>
  );
}
