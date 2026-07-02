import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

const variants = {
  ghost:
    "border border-[#b4c2e2] bg-linear-to-r from-[#e8f1ff] via-[#dde8ff] to-[#e6deff] text-[#22304a] hover:border-[#a6b6dc] hover:text-[#162338]",
  primary:
    "border border-[#b91c24]/50 bg-linear-to-r from-[#d72832] via-[#b91c24] to-[#8f1118] text-white hover:border-[#b91c24]/60 hover:from-[#df313b] hover:via-[#c31f28] hover:to-[#99141c]",
};

export default function Button({
  children,
  className,
  fullWidth = false,
  href,
  showArrow = false,
  type = "button",
  variant = "primary",
  ...props
}) {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[14px] font-semibold transition-all duration-300 shadow-[0_18px_34px_rgba(48,66,110,0.1)]",
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" /> : null}
    </Component>
  );
}
