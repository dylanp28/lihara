"use client";

import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants";

interface ProductFilterProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ProductFilter({ activeCategory, onCategoryChange }: ProductFilterProps) {
  return (
    <div className="flex flex-wrap gap-6 mb-12">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "text-sm tracking-wide transition-colors duration-300 pb-0.5",
          activeCategory === null
            ? "text-charcoal"
            : "text-charcoal/30 hover:text-charcoal/60"
        )}
      >
        All
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onCategoryChange(cat.slug)}
          className={cn(
            "text-sm tracking-wide transition-colors duration-300 pb-0.5",
            activeCategory === cat.slug
              ? "text-charcoal"
              : "text-charcoal/30 hover:text-charcoal/60"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
