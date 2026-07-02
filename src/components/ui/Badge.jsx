import { cn } from "@/utils/cn";

const variants = {
  completed: "border-[#d9e0ee] bg-[#f8fbff] text-muted-2",
  default: "border-[#e5e7eb] bg-white text-[#6b7280]",
  featured: "border-white/25 bg-white/10 text-white",
};

export default function Badge({ children, className, variant = "default" }) {
  return (
    <span
      className={cn(
        "inline-flex self-start border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
