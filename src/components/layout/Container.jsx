import { cn } from "@/utils/cn";

export default function Container({ as: Component = "div", children, className }) {
  return (
    <Component className={cn("mx-auto w-full max-w-[1180px] px-6 lg:px-10", className)}>
      {children}
    </Component>
  );
}
