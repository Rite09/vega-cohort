import { forwardRef } from "react";
import { cn } from "@/utils/cn";

function renderLabel(label) {
  if (typeof label !== "string" || !label.includes("*")) {
    return label;
  }

  const cleanLabel = label.replace(/\*/g, "").trim();

  return (
    <>
      {cleanLabel} <span className="text-red-bright">*</span>
    </>
  );
}

const Input = forwardRef(function Input({ error, label, labelClassName, name, className, ...props }, ref) {
  return (
    <label className="block">
      <span className={cn("mb-2 block text-[12px] tracking-[0.01em] text-muted-2", labelClassName)}>
        {renderLabel(label)}
      </span>
      <input
        ref={ref}
        name={name}
        className={cn(
          "w-full rounded-[18px] border border-[#d9e0ee] bg-white/88 px-4 py-[13px] text-[14.5px] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_12px_28px_rgba(26,34,56,0.05)] transition-[border-color,background-color,box-shadow,transform] duration-300 placeholder:text-muted-2 hover:border-[#cbd7eb] hover:bg-white focus:border-[#c41e24]/30 focus:bg-white focus:shadow-[inset_0_1px_0_rgba(255,255,255,0.96),0_18px_36px_rgba(26,34,56,0.08)] focus:outline-none",
          className
        )}
        {...props}
      />
      {error ? <span className="mt-2 block text-sm text-red-bright">{error}</span> : null}
    </label>
  );
});

export default Input;
