import Heading from "@/components/ui/Heading";
import { cn } from "@/utils/cn";
import { formatSectionLabel } from "@/utils/format-section-label";
import { formatVegaText } from "@/utils/format-vega-text";

export default function SectionHeading({
  centered = false,
  className,
  description,
  descriptionClassName,
  label,
  title,
  titleClassName,
}) {
  return (
    <div className={cn("mb-10", centered && "mx-auto text-center", className)}>
      {label ? (
        <div className={cn("section-eyebrow section-eyebrow--large mb-[18px]", centered && "mx-auto")}>
          {formatSectionLabel(label)}
        </div>
      ) : null}

      <Heading
        size="h2"
        className={cn(
          "section-title-gradient max-w-[1100px] text-[clamp(32px,4.2vw,52px)] font-bold leading-[1.1]",
          centered && "mx-auto",
          titleClassName
        )}
      >
        {formatVegaText(title)}
      </Heading>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-[720px] text-[17px] leading-[1.75] text-muted",
            centered && "mx-auto",
            descriptionClassName
          )}
        >
          {formatVegaText(description)}
        </p>
      ) : null}
    </div>
  );
}
