import { cx } from "@/lib/utils";

export function Tabs({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cx("inline-flex rounded-xl border bg-white p-1", className)}>{children}</div>;
}

export function TabButton({ active, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      {...props}
      className={cx(
        "rounded-lg px-3 py-1.5 text-sm",
        active ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100",
        className,
      )}
    />
  );
}
