import { cx } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
};

export function Button({ variant = "primary", className, ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90"
      : variant === "outline"
        ? "border bg-white hover:bg-gray-50"
        : "hover:bg-gray-100";
  return <button className={cx(base, styles, className)} {...rest} />;
}
