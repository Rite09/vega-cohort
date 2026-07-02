import { cn } from "@/utils/cn";

export default function Divider({ className }) {
  return <hr aria-hidden className={cn("border-0 border-t border-line", className)} />;
}
