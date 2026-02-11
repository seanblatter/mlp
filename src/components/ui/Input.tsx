import { cx } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200",
        props.className,
      )}
    />
  );
}
