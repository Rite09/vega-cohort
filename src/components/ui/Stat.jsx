import Counter from "@/components/animations/Counter";
import { cn } from "@/utils/cn";

export default function Stat({
  animate = false,
  className,
  displayValue,
  label,
  note,
  prefix,
  suffix,
  value,
}) {
  return (
    <div className={cn("rounded-[28px] bg-white px-[30px] py-10 shadow-[0_18px_48px_rgba(26,34,56,0.08)]", className)}>
      <div className="font-sans text-[clamp(36px,4vw,52px)] leading-none text-red">
        {animate ? (
          <Counter duration={1.4} prefix={prefix} suffix={suffix} value={value} />
        ) : (
          displayValue
        )}
      </div>
      <div className="mt-3 text-sm text-muted">{label}</div>
      {note ? <div className="mt-1.5 text-xs italic text-muted-2">{note}</div> : null}
    </div>
  );
}
