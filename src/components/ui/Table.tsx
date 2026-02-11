import { cx } from "@/lib/utils";

export function Table(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cx("overflow-x-auto", props.className)}>
      <table className="min-w-full text-sm">{props.children}</table>
    </div>
  );
}

export function THead(props: React.PropsWithChildren) {
  return <thead className="text-left text-xs uppercase text-gray-500">{props.children}</thead>;
}

export function TBody(props: React.PropsWithChildren) {
  return <tbody className="divide-y">{props.children}</tbody>;
}

export function TR(props: React.PropsWithChildren<{ className?: string }>) {
  return <tr className={cx("hover:bg-gray-50", props.className)}>{props.children}</tr>;
}

export function TH(props: React.PropsWithChildren<{ className?: string }>) {
  return <th className={cx("px-3 py-2 font-semibold", props.className)}>{props.children}</th>;
}

export function TD(props: React.PropsWithChildren<{ className?: string }>) {
  return <td className={cx("px-3 py-2", props.className)}>{props.children}</td>;
}
