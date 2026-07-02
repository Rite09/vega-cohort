import { cn } from "@/utils/cn";

const sizes = {
  h1: "text-[clamp(44px,5.6vw,76px)] leading-[1.02] tracking-[-0.03em]",
  h2: "text-[clamp(34px,3.8vw,52px)] leading-[1.08] tracking-[-0.025em]",
  h3: "text-[24px] leading-[1.2]",
};

export default function Heading({
  as: Component = "h2",
  children,
  className,
  size = "h2",
}) {
  return (
    <Component className={cn("font-serif font-semibold text-foreground", sizes[size], className)}>
      {children}
    </Component>
  );
}
