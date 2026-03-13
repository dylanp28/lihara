import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  children,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.05]">
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-charcoal/40 max-w-2xl text-base font-light",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
