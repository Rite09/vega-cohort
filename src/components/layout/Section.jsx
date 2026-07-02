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
        "relative py-20 md:py-24 lg:py-[120px]",
        !noBorder && "border-b border-line",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
