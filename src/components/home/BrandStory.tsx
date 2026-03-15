"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

export function BrandStory() {
  return (
    <section className="relative bg-charcoal py-28 sm:py-40 overflow-hidden">
      <Container>
        {/* Editorial split — media left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <AnimatedSection>
            <div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/brand-story.jpg"
                  alt="A child sketching designs"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-cream/25 text-[13px] font-light mt-3 tracking-wide">
                Me at age 5
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-display italic text-display-lg text-cream/80 leading-[1.05]">
              Every child is
              <span className="text-cream"> an artist.</span>
            </p>

            <p className="text-cream/35 font-light leading-[1.9] text-[15px] sm:text-[16px] mt-10">
              Somewhere along the way, we stopped dreaming out loud. The ideas
              that once came without hesitation, bold, unfiltered, maybe a
              little crazy, got traded for safe choices and quiet conformity.
              LIHARA exists to reignite that spark. To remind you that the kid
              who drew outside the lines didn&apos;t disappear.
            </p>

            <p className="text-cream/35 font-light leading-[1.9] text-[15px] sm:text-[16px] mt-6">
              Crafted from 316L surgical-grade stainless steel. Hypoallergenic,
              water resistant, built to last.
            </p>

            <p className="font-display italic text-xl sm:text-2xl text-cream/50 leading-[1.3] mt-10">
              &ldquo;The problem is how to remain one once we grow up.&rdquo;
            </p>
            <p className="text-cream/25 text-[13px] mt-3 tracking-wide">
              &mdash; Picasso
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-cream/40 text-[14px] uppercase tracking-[0.3em] hover:text-cream/70 transition-colors duration-500 mt-10"
            >
              <span>Our story</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
