import { cn } from "@/utils/cn";

export default function Grid({ as: Component = "div", children, className }) {
  return <Component className={cn("grid", className)}>{children}</Component>;
}
