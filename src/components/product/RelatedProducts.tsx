import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="mt-24 pt-20">
      <div className="flex items-center gap-6 mb-12">
        <span className="text-[11px] uppercase tracking-[0.35em] text-charcoal/30 font-body">
          You may also like
        </span>
        <div className="flex-1 h-px bg-accent/60" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
