"use client";

import { useState } from "react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { SizeSelector } from "./SizeSelector";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? "");
  const { addItem } = useCart();

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-charcoal/35 mb-3">
          {product.category}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-charcoal leading-[1.1]">
          {product.name}
        </h1>
        <p className="mt-4 text-lg text-charcoal/70">{formatPrice(product.price)}</p>
      </div>

      <p className="text-charcoal/50 font-light leading-relaxed">{product.description}</p>

      {product.sizes && product.sizes.length > 0 && (
        <SizeSelector
          sizes={product.sizes}
          selected={selectedSize}
          onSelect={setSelectedSize}
        />
      )}

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={() => addItem(product, selectedSize || undefined)}
      >
        Add to Cart — {formatPrice(product.price)}
      </Button>

      <div className="pt-8">
        <h3 className="text-[11px] uppercase tracking-[0.25em] text-charcoal/35 mb-4">Details</h3>
        <ul className="space-y-2.5">
          {product.details.map((detail, i) => (
            <li key={i} className="text-sm text-charcoal/50 font-light">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
