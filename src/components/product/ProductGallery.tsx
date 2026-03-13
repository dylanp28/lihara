"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProductImage, Category } from "@/types";
import { ProductPlaceholder } from "./ProductPlaceholder";

interface ProductGalleryProps {
  images: ProductImage[];
  category: Category;
}

export function ProductGallery({ images, category }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-3">
      <div className="overflow-hidden">
        <ProductPlaceholder
          gradient={images[selected].gradient}
          category={category}
          size="lg"
        />
      </div>

      <div className="flex gap-2">
        {images.map((image, i) => (
          <button
            key={image.id}
            onClick={() => setSelected(i)}
            className={cn(
              "w-20 h-20 overflow-hidden transition-opacity duration-300",
              selected === i ? "opacity-100" : "opacity-40 hover:opacity-70"
            )}
          >
            <ProductPlaceholder gradient={image.gradient} category={category} size="sm" className="h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
