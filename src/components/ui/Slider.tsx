import { cx } from "@/lib/utils";

export function Slider(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} type="range" className={cx("w-full", props.className)} />;
}
