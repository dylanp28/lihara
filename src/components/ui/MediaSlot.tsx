"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MediaSlotProps {
  label: string;
  ratio?: string;
  className?: string;
  dark?: boolean;
  children?: ReactNode;
}

export function MediaSlot({
  label,
  ratio = "aspect-[4/5]",
  className,
  dark = false,
  children,
}: MediaSlotProps) {
  const base = dark
    ? "bg-cream/[0.03] border-cream/[0.08]"
    : "bg-charcoal/[0.03] border-charcoal/[0.08]";
  const textColor = dark ? "text-cream/20" : "text-charcoal/20";

  return (
    <div
      className={cn(
        "relative border border-dashed rounded-sm flex items-center justify-center overflow-hidden",
        base,
        ratio,
        className
      )}
    >
      {children || (
        <div className={cn("flex flex-col items-center gap-2", textColor)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1" />
            <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1" />
            <path d="M21 15l-5-5L5 21" strokeWidth="1" />
          </svg>
          <span className="text-[11px] uppercase tracking-[0.2em] font-body text-center px-4">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
