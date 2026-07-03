import { cn } from "@/utils/cn";

export default function VegaName({ className }) {
  return (
    <span className={cn("vega-name", className)}>
      VEGA<sup className="vega-mark">©</sup>
    </span>
  );
}
