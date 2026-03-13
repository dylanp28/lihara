"use client";

import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { ProductPlaceholder } from "./ProductPlaceholder";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="overflow-hidden">
          <ProductPlaceholder
            gradient={product.images[0].gradient}
            category={product.category}
            size="md"
            className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[13px] text-charcoal transition-colors duration-500 group-hover:text-charcoal/50">
              {product.name}
            </h3>
            <p className="text-[10px] text-charcoal/25 mt-1 uppercase tracking-[0.2em]">
              {product.category}
            </p>
          </div>
          <span className="text-[13px] text-charcoal/40 font-light flex-shrink-0">
            {formatPrice(product.price)}
          </span>
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product, product.sizes?.[0]);
        }}
        className="absolute top-3 right-3 bg-cream/90 backdrop-blur-sm text-charcoal/60 w-7 h-7 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 hover:text-charcoal rounded-full"
      >
        +
      </button>
    </div>
  );
}
