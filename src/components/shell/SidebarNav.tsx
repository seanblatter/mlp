"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/disputes", label: "Disputes" },
  { href: "/portfolio", label: "Portfolio Forecast" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/counsel-neutrals", label: "Counsel & Neutrals" },
  { href: "/imports", label: "Data Imports" },
  { href: "/settings", label: "Settings" },
];

export function SidebarNav() {
  const path = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r bg-white">
      <div className="p-4">
        <div className="text-sm font-semibold">Dispute Resolution Intelligence</div>
        <div className="text-xs text-gray-500">Property MVP</div>
      </div>

      <nav className="px-2 pb-4">
        {items.map((it) => {
          const active = path === it.href || path.startsWith(it.href + "/");
          return (
            <Link
              key={it.href}
              href={it.href}
              className={cx(
                "flex items-center rounded-xl px-3 py-2 text-sm",
                active ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100",
              )}
            >
              {it.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
