"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductFilter } from "./ProductFilter";
import { ProductGrid } from "./ProductGrid";
import { getShopProducts } from "@/data/products";

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    initialCategory
  );

  const shopProducts = useMemo(() => getShopProducts(), []);
  const filtered = useMemo(
    () =>
      activeCategory
        ? shopProducts.filter((p) => p.category === activeCategory)
        : shopProducts,
    [activeCategory, shopProducts]
  );

  return (
    <>
      <ProductFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {filtered.length === 0 ? (
        <p className="text-center text-charcoal/50 py-20">
          No products found in this category.
        </p>
      ) : (
        <ProductGrid products={filtered} />
      )}
    </>
  );
}
