import { cx } from "@/lib/utils";

export function Card(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cx("rounded-2xl border bg-white shadow-sm", props.className)}>
      {props.children}
    </div>
  );
}

export function CardHeader(
  props: React.PropsWithChildren<{ className?: string }>,
) {
  return <div className={cx("border-b p-4", props.className)}>{props.children}</div>;
}

export function CardTitle(props: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cx("text-sm font-semibold", props.className)}>{props.children}</div>;
}

export function CardContent(
  props: React.PropsWithChildren<{ className?: string }>,
) {
  return <div className={cx("p-4", props.className)}>{props.children}</div>;
}
