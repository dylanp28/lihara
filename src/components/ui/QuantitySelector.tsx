"use client";

import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  className,
}: QuantitySelectorProps) {
  return (
    <div className={cn("inline-flex items-center bg-accent/40", className)}>
      <button
        onClick={onDecrease}
        className="w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-charcoal transition-colors"
        aria-label="Decrease quantity"
      >
        &#8722;
      </button>
      <span className="w-8 h-8 flex items-center justify-center text-xs">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-charcoal transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
