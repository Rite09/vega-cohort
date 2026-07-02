import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Select = forwardRef(function Select(
  { error, label, labelClassName, name, options, className, ...props },
  ref
) {
  return (
    <label className="block">
      <span className={cn("mb-2 block text-[12px] tracking-[0.01em] text-muted-2", labelClassName)}>{label}</span>
      <div className="relative">
        <select
          ref={ref}
          name={name}
          className={cn(
            "w-full appearance-none rounded-[18px] border border-[#d9e0ee] bg-white/88 px-4 py-[13px] pr-11 text-[14.5px] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_12px_28px_rgba(26,34,56,0.05)] transition-[border-color,background-color,box-shadow] duration-300 focus:border-[#c41e24]/30 focus:bg-white focus:shadow-[inset_0_1px_0_rgba(255,255,255,0.96),0_18px_36px_rgba(26,34,56,0.08)] focus:outline-none hover:border-[#cbd7eb] hover:bg-white",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-2" />
      </div>
      {error ? <span className="mt-2 block text-sm text-red-bright">{error}</span> : null}
    </label>
  );
});

export default Select;
