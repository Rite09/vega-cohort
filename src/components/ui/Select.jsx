import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Select = forwardRef(function Select(
  { error, label, name, options, className, ...props },
  ref
) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] uppercase tracking-[0.05em] text-muted-2">{label}</span>
      <div className="relative">
        <select
          ref={ref}
          name={name}
          className={cn(
            "w-full appearance-none rounded-[18px] border border-[#d9e0ee] bg-[#f8fbff] px-4 py-[13px] pr-11 text-[14.5px] text-foreground focus:border-[#c41e24]/30 focus:bg-white focus:outline-none",
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
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
      </div>
      {error ? <span className="mt-2 block text-sm text-red-bright">{error}</span> : null}
    </label>
  );
});

export default Select;
