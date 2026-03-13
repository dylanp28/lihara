"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MediaSlot } from "@/components/ui/MediaSlot";

const HERO_CATEGORIES = [
  { label: "Rings", slug: "rings" },
  { label: "Necklaces", slug: "necklaces" },
  { label: "Bracelets", slug: "bracelets" },
  { label: "Earrings", slug: "earrings" },
];

export function HeroSection() {
  return (
    <section className="relative bg-charcoal min-h-screen">
      {/* Main hero area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left — Typography + CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 lg:py-0 order-2 lg:order-1">
          <div className="max-w-md">
            <motion.p
              className="text-cream/25 text-[10px] uppercase tracking-[0.5em] font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stainless steel jewelry
            </motion.p>

            <div className="mt-6 overflow-hidden">
              <motion.h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream leading-[0.9]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                Creativity.
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-1">
              <motion.h1
                className="font-display italic text-5xl sm:text-6xl lg:text-7xl text-cream/50 leading-[0.9]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              >
                Refined.
              </motion.h1>
            </div>

            <motion.p
              className="mt-8 text-cream/25 text-[13px] font-light leading-[1.8] max-w-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Geometric forms in 316L stainless steel. Designed to be worn, not
              just displayed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10"
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 text-cream/30 text-[10px] uppercase tracking-[0.25em] font-body hover:text-cream/60 transition-colors duration-500"
              >
                <span>Explore the collection</span>
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right — Hero media slot */}
        <motion.div
          className="lg:col-span-7 relative order-1 lg:order-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <MediaSlot
            label="Hero image or video — 1400×1800 recommended"
            ratio=""
            dark
            className="h-[60vh] lg:h-full rounded-none border-0 border-l border-dashed lg:border-cream/[0.06]"
          />
        </motion.div>
      </div>

      {/* Category strip — 4 thumbnail slots */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-cream/[0.06]">
        <div className="grid grid-cols-4">
          {HERO_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
            >
              <Link
                href={`/products?category=${cat.slug}`}
                className="group block relative"
              >
                <MediaSlot
                  label={cat.label}
                  ratio="aspect-[16/9]"
                  dark
                  className="rounded-none border-0 border-r border-dashed border-cream/[0.06] last:border-r-0"
                />
                <div className="absolute inset-0 flex items-end p-3 sm:p-5">
                  <span className="text-cream/20 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-body group-hover:text-cream/40 transition-colors duration-500">
                    {cat.label}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
