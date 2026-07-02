import { cn } from "@/utils/cn";

const variants = {
  accent: "border border-[#c41e24]/15 bg-linear-to-br from-[#c41e24] via-[#b21b21] to-[#8f1118] text-white shadow-[0_22px_54px_rgba(196,30,36,0.18)]",
  bare: "bg-transparent",
  panel: "border border-line bg-surface p-11 shadow-[0_18px_48px_rgba(26,34,56,0.08)]",
  surface: "border border-line bg-surface shadow-[0_18px_48px_rgba(26,34,56,0.08)]",
};

export default function Card({
  as: Component = "div",
  children,
  className,
  variant = "surface",
}) {
  return <Component className={cn(variants[variant], className)}>{children}</Component>;
}
