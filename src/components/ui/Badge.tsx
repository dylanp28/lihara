import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "gold";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center text-xs font-medium px-2 py-0.5 rounded-full",
        variant === "default" && "bg-charcoal text-cream",
        variant === "gold" && "bg-charcoal text-cream",
        className
      )}
    >
      {children}
    </span>
  );
}
