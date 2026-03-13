"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { getFeaturedProducts } from "@/data/products";
import { Product } from "@/types";

function ProductImage({ product, className }: { product: Product; className: string }) {
  const img = product.images[0];
  if (img.src) {
    return (
      <div className={`relative overflow-hidden bg-accent/30 ${className}`}>
        <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <MediaSlot
      label={`${product.name} — product image`}
      ratio=""
      className={`${className} rounded-none`}
    />
  );
}

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  if (featured.length < 3) return null;
  const [hero, ...rest] = featured;

  return (
    <section className="py-24 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-4">
          <AnimatedSection className="lg:col-span-7">
            <Link href={hero.line ? `/lines/${hero.slug}` : `/products/${hero.slug}`} className="group block">
              <div className="overflow-hidden">
                <ProductImage
                  product={hero}
                  className="!h-[30rem] sm:!h-[38rem] transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-2xl sm:text-3xl text-charcoal transition-colors duration-500 group-hover:text-charcoal/60">
                  {hero.name}
                </h3>
                <p className="text-[11px] text-charcoal/30 mt-1.5 uppercase tracking-[0.2em]">
                  {hero.subtitle || hero.category}
                </p>
              </div>
            </Link>
          </AnimatedSection>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {rest.slice(0, 2).map((product, i) => (
              <AnimatedSection key={product.id} delay={0.12 + i * 0.1}>
                <Link href={product.line ? `/lines/${product.slug}` : `/products/${product.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <ProductImage
                      product={product}
                      className="!h-48 sm:!h-[17.5rem] transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm text-charcoal transition-colors duration-500 group-hover:text-charcoal/60">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-charcoal/25 mt-1 uppercase tracking-[0.2em]">
                      {product.subtitle || product.category}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.3} className="mt-14">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 text-charcoal/40 text-[11px] uppercase tracking-[0.2em] font-body hover:text-charcoal transition-colors duration-500"
          >
            <span>View all pieces</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
