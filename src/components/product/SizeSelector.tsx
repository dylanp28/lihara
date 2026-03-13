"use client";

import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
}

export function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-charcoal/35">Size</span>
        {selected && <span className="text-xs text-charcoal/40">{selected}</span>}
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={cn(
              "min-w-[44px] h-10 px-3 text-sm transition-all duration-300",
              selected === size
                ? "bg-charcoal text-cream"
                : "bg-accent/40 text-charcoal/60 hover:bg-accent"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
