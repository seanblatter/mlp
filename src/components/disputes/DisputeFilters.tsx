"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function DisputeFilters({ onSearch }: { onSearch?: (q: string) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="w-72">
        <Input
          placeholder="Search disputes (property, id, title)..."
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
      <Button variant="outline">Stage</Button>
      <Button variant="outline">Type</Button>
      <Button variant="outline">Risk</Button>
      <Button variant="outline">Insurance</Button>
    </div>
  );
}
