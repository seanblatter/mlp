import { cx } from "@/lib/utils";

export function Badge({
  children,
  tone = "gray",
}: React.PropsWithChildren<{
  tone?: "gray" | "red" | "yellow" | "green";
}>) {
  const map: Record<string, string> = {
    gray: "bg-gray-100 text-gray-700",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-700",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        map[tone],
      )}
    >
      {children}
    </span>
  );
}
