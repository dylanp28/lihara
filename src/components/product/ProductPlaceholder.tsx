import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface ProductPlaceholderProps {
  gradient: string;
  category: Category;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function CategoryComposition({ category }: { category: Category }) {
  switch (category) {
    case "rings":
      return (
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.12" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
          <circle cx="200" cy="200" r="40" fill="currentColor" opacity="0.04" />
          <circle cx="200" cy="160" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
          <line x1="80" y1="200" x2="320" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
        </svg>
      );
    case "necklaces":
      return (
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path d="M100 80 Q200 320 300 80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
          <path d="M120 80 Q200 280 280 80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.07" />
          <circle cx="200" cy="280" r="12" fill="currentColor" opacity="0.08" />
          <circle cx="200" cy="280" r="6" fill="currentColor" opacity="0.06" />
          <line x1="200" y1="260" x2="200" y2="400" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
        </svg>
      );
    case "bracelets":
      return (
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="200" cy="200" rx="160" ry="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
          <ellipse cx="200" cy="200" rx="130" ry="45" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.07" />
          <rect x="60" y="190" width="280" height="20" rx="10" fill="currentColor" opacity="0.03" />
          <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
        </svg>
      );
    case "earrings":
      return (
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <line x1="160" y1="60" x2="160" y2="340" stroke="currentColor" strokeWidth="1" opacity="0.1" />
          <line x1="240" y1="100" x2="240" y2="380" stroke="currentColor" strokeWidth="0.5" opacity="0.07" />
          <circle cx="160" cy="80" r="8" fill="currentColor" opacity="0.08" />
          <circle cx="240" cy="120" r="6" fill="currentColor" opacity="0.06" />
          <circle cx="160" cy="320" r="16" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
          <circle cx="240" cy="360" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
        </svg>
      );
  }
}

const sizes = {
  sm: "h-20",
  md: "h-64 sm:h-72",
  lg: "h-80 sm:h-96",
};

export function ProductPlaceholder({ gradient, category, size = "md", className }: ProductPlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-br relative text-charcoal/60 overflow-hidden",
        gradient,
        sizes[size],
        className
      )}
    >
      <CategoryComposition category={category} />
    </div>
  );
}
