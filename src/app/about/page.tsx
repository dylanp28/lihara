import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { NewsletterSection } from "@/components/layout/NewsletterSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "LIHARA — lab-grown diamonds, IGI certified, set in 14K and 18K gold. Accessible luxury for the everyday. Our story.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal relative overflow-hidden py-28 sm:py-36">
        <Container>
          <div className="max-w-4xl">
            <p className="text-cream/20 text-[12px] uppercase tracking-[0.5em] mb-8 font-body">
              Our Story
            </p>
            <h1 className="font-display text-display-lg text-cream leading-[1.05]">
              Real Diamonds.
              <br />
              <span className="italic text-cream">Real You.</span>
            </h1>
            <p className="mt-8 text-cream/30 font-light leading-[1.8] max-w-xl text-[13px]">
              Lihara was built on one idea: fine jewelry shouldn&apos;t be a
              once-in-a-lifetime luxury. Lab-grown diamonds, IGI certified, set
              in 14K and 18K gold — made for how you actually live.
            </p>
          </div>
        </Container>
      </section>

      {/* The Diamond Story */}
      <section className="py-24 sm:py-32">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
              <div>
                <span className="text-[12px] uppercase tracking-[0.35em] text-charcoal/25">
                  The Diamond
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4 leading-[1.1]">
                  Grown in a Lab.
                  <br />
                  <span className="italic">Certified for Life.</span>
                </h2>
              </div>
              <div className="space-y-6 text-charcoal/45 font-light leading-[1.8]">
                <p>
                  Lab-grown diamonds are the real thing — same chemical
                  composition, same hardness, same fire. The only difference is
                  where they come from: a controlled environment instead of the
                  earth.
                </p>
                <p>
                  Every Lihara diamond is IGI certified and graded VS2 or
                  better. You get a stone with known origin, documented quality,
                  and no compromises — at a price that makes sense.
                </p>
                <p>
                  We make everything in-house. From design to setting, each
                  piece is built by our team — not outsourced, not mass-produced
                  overseas. Made to order, so it&apos;s made for you.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-24 sm:py-32 bg-charcoal relative overflow-hidden">
        <Container>
          <AnimatedSection>
            <span className="text-[12px] uppercase tracking-[0.35em] text-cream/20 font-body block mb-14">
              What We Stand For
            </span>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {[
              {
                title: "Accessible Luxury",
                text: "Fine jewelry should be for everyone — not just special occasions. We design pieces you can wear every day without worrying about them. The diamond is real. The price is honest.",
              },
              {
                title: "Made In-House",
                text: "Every piece is made to order by our own team. No middlemen, no warehouses full of inventory. Your order is crafted after you place it — that's why it takes 3–6 weeks and why it lasts forever.",
              },
              {
                title: "Gold You Can Trust",
                text: "We work exclusively in 14K and 18K gold — white, yellow, and rose. Solid gold, not plated. Your piece will look the same in 10 years as it does on day one.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-charcoal p-8 sm:p-10">
                  <h3 className="font-display italic text-xl text-cream/60 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-cream/25 font-light leading-[1.8] text-[13px]">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Miami / LA Energy */}
      <section className="py-24 sm:py-32">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
              <div>
                <span className="text-[12px] uppercase tracking-[0.35em] text-charcoal/25">
                  The Vibe
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4 leading-[1.1]">
                  Miami Heat.
                  <br />
                  <span className="italic">LA Cool.</span>
                </h2>
              </div>
              <div className="space-y-6 text-charcoal/45 font-light leading-[1.8]">
                <p>
                  Lihara was born from two cities with the same energy: the kind
                  of place where people dress well not to impress, but because
                  it feels good. Where a diamond stud is everyday, not
                  extraordinary.
                </p>
                <p>
                  We design for a younger generation that wants the real thing
                  without the pretension. Classic pieces that don&apos;t
                  scream — studs, tennis chains, solitaire rings — done in
                  materials that last.
                </p>
                <p>
                  No gatekeeping. No wait list. Just beautiful jewelry that
                  fits your actual life.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-charcoal">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-[12px] uppercase tracking-[0.35em] text-cream/20 mb-6">
                Lab-grown. IGI certified. Made for you.
              </p>
              <p className="font-display italic text-3xl sm:text-4xl text-cream leading-[1.1] mb-10">
                Fine jewelry, finally within reach.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/products"
                  className="inline-block bg-cream text-charcoal px-10 py-3.5 text-[13px] uppercase tracking-[0.2em] hover:bg-cream/85 transition-colors duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  href="/faq"
                  className="group inline-flex items-center gap-3 text-cream/40 text-[12px] uppercase tracking-[0.25em] font-body hover:text-cream transition-colors duration-500"
                >
                  <span>Have questions?</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14m-4-4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <NewsletterSection />
    </>
  );
}
