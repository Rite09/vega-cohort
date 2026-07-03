import Container from "@/components/layout/Container";
import { cn } from "@/utils/cn";

export default function Section({
  as: Component = "section",
  children,
  className,
  containerClassName,
  id,
  noBorder = false,
}) {
  return (
    <Component
      id={id}
      className={cn(
        "relative overflow-x-clip py-14 md:py-16 lg:py-20",
        !noBorder && "border-b border-line",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
