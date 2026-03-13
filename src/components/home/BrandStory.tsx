"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MediaSlot } from "@/components/ui/MediaSlot";
import Link from "next/link";

export function BrandStory() {
  return (
    <section className="relative bg-charcoal py-28 sm:py-40 overflow-hidden">
      <Container>
        {/* Editorial split — media left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <AnimatedSection>
            <MediaSlot
              label="Process or lifestyle image — 800×1000"
              ratio="aspect-[4/5]"
              dark
              className="w-full"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-display italic text-display-lg text-cream/80 leading-[1.05]">
              Where artistry meets
              <span className="text-cream"> accessibility.</span>
            </p>

            <p className="text-cream/35 font-light leading-[1.8] text-[13px] mt-10">
              We believe the creative community deserves jewelry that speaks
              their language — pieces informed by architecture, sculpture, and
              the principles of modern design. Every LIHARA piece begins as a
              sketch, refined through prototyping until only the essential form
              remains.
            </p>

            <p className="text-cream/35 font-light leading-[1.8] text-[13px] mt-6">
              Crafted from 316L stainless steel — the same grade used in
              surgical instruments. Hypoallergenic, water-resistant, and built
              to last. Each piece is finished by hand in brushed, polished, or
              matte textures.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-cream/40 text-[10px] uppercase tracking-[0.3em] hover:text-cream/70 transition-colors duration-500 mt-10"
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

        {/* Values strip with media slots */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 sm:mt-32">
          {[
            {
              title: "Design-Led",
              desc: "Every piece starts as a sketch, iterated until only the essential form remains.",
              media: "Sketching or design process — 600×400",
            },
            {
              title: "Premium Steel",
              desc: "316L surgical-grade stainless steel. Won\u2019t tarnish, fade, or irritate.",
              media: "Material close-up or texture — 600×400",
            },
            {
              title: "$35\u2013$70",
              desc: "Thoughtful design shouldn\u2019t require a luxury budget.",
              media: "Styled product shot — 600×400",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={0.2 + i * 0.1}>
              <MediaSlot
                label={item.media}
                ratio="aspect-[3/2]"
                dark
                className="w-full"
              />
              <h4 className="text-cream/50 font-display italic text-lg mt-5 mb-2">
                {item.title}
              </h4>
              <p className="text-cream/25 text-[12px] font-light leading-[1.8]">
                {item.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
