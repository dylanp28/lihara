"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export function HeroSection() {
  return (
    <section className="relative bg-charcoal">
      {/* Main hero area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 h-[85vh]">
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

        {/* Right — Hero video */}
        <motion.div
          className="lg:col-span-7 relative order-1 lg:order-2 h-[50vh] lg:h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/hero-new.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

    </section>
  );
}
