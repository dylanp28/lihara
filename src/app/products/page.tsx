"use client";

import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ProductCatalog } from "@/components/product/ProductCatalog";

export default function ProductsPage() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="mb-14">
          <span className="text-[13px] uppercase tracking-[0.35em] text-charcoal/30 font-body">
            All pieces
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mt-4 leading-[1.05]">
            The Collection
          </h1>
        </div>

        <Suspense fallback={<div className="py-20 text-center text-charcoal/20 text-sm">Loading...</div>}>
          <ProductCatalog />
        </Suspense>
      </Container>
    </section>
  );
}
