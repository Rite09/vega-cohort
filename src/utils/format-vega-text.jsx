import { Fragment } from "react";
import VegaName from "@/components/ui/VegaName";

export function formatVegaText(text) {
  if (typeof text !== "string" || !/VEGA/i.test(text)) {
    return text;
  }

  const parts = text.split(/(VEGA[®©]?)/gi);

  return parts.map((part, index) => {
    if (/^VEGA[®©]?$/i.test(part)) {
      return <VegaName key={`vega-${index}`} />;
    }

    if (!part) {
      return null;
    }

    return <Fragment key={`text-${index}`}>{part}</Fragment>;
  });
}
