"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { CATEGORIES } from "@/lib/constants";

const HEIGHTS = [
  "h-80 sm:h-[26rem]",
  "h-60 sm:h-72",
  "h-72 sm:h-80",
  "h-80 sm:h-[26rem]",
];
const OFFSETS = ["", "lg:mt-16", "lg:mt-6", "lg:mt-20"];

export function CategoryShowcase() {
  return (
    <section className="py-24 sm:py-36">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {CATEGORIES.map((cat, i) => (
            <AnimatedSection key={cat.slug} delay={i * 0.08}>
              <Link
                href={`/products?category=${cat.slug}`}
                className={`group block ${OFFSETS[i]}`}
              >
                <div className="overflow-hidden">
                  <MediaSlot
                    label={`${cat.label} — category image`}
                    ratio=""
                    className={`${HEIGHTS[i]} rounded-none transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`}
                  />
                </div>
                <div className="mt-4">
                  <span className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-charcoal/60 group-hover:text-charcoal/80 transition-colors duration-500 leading-none">
                    {cat.label}
                  </span>
                  <p className="text-[10px] text-charcoal/30 mt-2 font-light tracking-wider">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
