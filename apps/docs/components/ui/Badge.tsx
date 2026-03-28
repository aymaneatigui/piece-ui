import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "new" | "updated" | "form" | "layout" | "content" | "animation";

const variantStyles: Record<BadgeVariant, string> = {
  default:   "bg-surface-2 text-text-secondary border-border",
  new:       "bg-accent/10 text-accent border-accent/25",
  updated:   "bg-amber-500/10 text-amber-400 border-amber-500/25",
  form:      "bg-blue-500/10 text-blue-400 border-blue-500/25",
  layout:    "bg-violet-500/10 text-violet-400 border-violet-500/25",
  content:   "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  animation: "bg-orange-500/10 text-orange-400 border-orange-500/25",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
