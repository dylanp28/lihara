"use client";

import Link from "next/link";
import { Product, Category } from "@/types";
import { formatPrice } from "@/lib/utils";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { getLatestDrops } from "@/data/products";

const CATEGORY_ORDER: Category[] = ["bracelets", "necklaces", "rings", "earrings"];

function DropCard({ product }: { product: Product }) {
  const img = product.images[0];
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex-shrink-0 w-[14rem] sm:w-[16rem]"
    >
      <div className="overflow-hidden bg-cream aspect-square">
        {img.src ? (
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <MediaSlot label={product.name} ratio="" className="w-full h-full rounded-none" />
        )}
      </div>
      <div className="mt-3">
        <p className="text-[13px] text-charcoal group-hover:text-charcoal/50 transition-colors duration-500">
          {product.name}
        </p>
        <p className="text-[12px] text-charcoal/30 mt-0.5 font-body">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

function CategoryRow({ category }: { category: Category }) {
  const drops = getLatestDrops(category);
  if (drops.length === 0) return null;

  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-baseline justify-between mb-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="font-display italic text-xl sm:text-2xl text-charcoal/70 capitalize">
          {category}
        </h3>
        <Link
          href={`/products?category=${category}`}
          className="text-[13px] uppercase tracking-[0.25em] text-charcoal/25 hover:text-charcoal/50 transition-colors duration-500 font-body"
        >
          Shop all
        </Link>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-2">
          {drops.map((product) => (
            <DropCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LatestDrops() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mb-10 sm:mb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="text-sm sm:text-base text-charcoal/50 uppercase tracking-[0.3em] font-body">
          Featured
        </p>
      </div>
      {CATEGORY_ORDER.map((cat) => (
        <CategoryRow key={cat} category={cat} />
      ))}
    </section>
  );
}
