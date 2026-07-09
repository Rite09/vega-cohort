import { ChevronDown } from "lucide-react";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
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

const Select = forwardRef(function Select(
  { error, label, labelClassName, name, options, className, value, onChange, onBlur, ...props },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const containerRef = useRef(null);
  const currentValue = value ?? props.defaultValue ?? "";

  const selectedOption = useMemo(
    () => options.find((option) => option.value === currentValue) || options[0],
    [options, currentValue]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleClickOutside(event) {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const menuHeight = 280;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    setOpenUpward(spaceBelow < menuHeight && spaceAbove > spaceBelow);
  }, [isOpen]);

  function handleSelect(option) {
    if (option.disabled) return;

    if (onChange) {
      onChange({
        target: {
          name,
          value: option.value,
        },
        currentTarget: {
          name,
          value: option.value,
        },
        type: "change",
      });
    }

    setIsOpen(false);
  }

  return (
    <label className="block">
      <span className={cn("mb-2 block text-[12px] tracking-[0.01em] text-muted-2", labelClassName)}>
        {renderLabel(label)}
      </span>
      <div className={cn("relative", isOpen ? "z-[120]" : "z-10")} ref={containerRef}>
        <input
          ref={ref}
          type="hidden"
          name={name}
          value={currentValue}
        />

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          onBlur={onBlur}
          className={cn(
            "flex w-full items-center justify-between rounded-[12px] border border-[#d3dae7] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] px-4 py-[12px] text-left text-[14px] font-medium text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.06)] transition-[border-color,box-shadow,background-color] duration-200 hover:border-[#bfcade] focus:border-[#b91c24] focus:bg-white focus:shadow-[0_0_0_3px_rgba(185,28,36,0.12)] focus:outline-none",
            className
          )}
          {...props}
        >
          <span className={cn(selectedOption?.disabled ? "text-[#6b7280]" : "text-[#111827]")}>
            {selectedOption?.label}
          </span>
          <span className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-[#e4e9f3] bg-white/95 text-[#6b7280]">
            <ChevronDown className={cn("size-4 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
          </span>
        </button>

        {isOpen ? (
          <ul
            className={cn(
              "absolute z-[140] max-h-64 w-full overflow-auto rounded-[12px] border border-[#d8deeb] bg-white p-1.5 shadow-[0_16px_40px_rgba(17,24,39,0.14)]",
              openUpward ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
            )}
          >
            {options.map((option) => {
              const isSelected = option.value === currentValue;
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    disabled={option.disabled}
                    onClick={() => handleSelect(option)}
                    className={cn(
                      "w-full rounded-[8px] px-3 py-2.5 text-left text-[14px] leading-tight transition-colors duration-150",
                      option.disabled
                        ? "cursor-not-allowed text-[#9aa3b2]"
                        : "cursor-pointer text-[#111827] hover:bg-[#fde8e8]",
                      isSelected && !option.disabled ? "bg-[#fde8e8] font-semibold text-[#111827]" : ""
                    )}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
        <span className="pointer-events-none absolute right-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e4e9f3] bg-white/95 text-[#6b7280]">
          <ChevronDown className="size-4" />
        </span>
      </div>
      {error ? <span className="mt-2 block text-sm text-red-bright">{error}</span> : null}
    </label>
  );
});

export default Select;
