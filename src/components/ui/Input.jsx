import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Input = forwardRef(function Input({ error, label, name, className, ...props }, ref) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] uppercase tracking-[0.05em] text-muted-2">{label}</span>
      <input
        ref={ref}
        name={name}
        className={cn(
          "w-full rounded-[18px] border border-[#d9e0ee] bg-[#f8fbff] px-4 py-[13px] text-[14.5px] text-foreground placeholder:text-muted-2 focus:border-[#c41e24]/30 focus:bg-white focus:outline-none",
          className
        )}
        {...props}
      />
      {error ? <span className="mt-2 block text-sm text-red-bright">{error}</span> : null}
    </label>
  );
});

export default Input;
