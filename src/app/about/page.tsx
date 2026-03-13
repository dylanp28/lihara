import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { NewsletterSection } from "@/components/layout/NewsletterSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "LIHARA — where creativity finds form. Learn about our mission, materials, and commitment to accessible design.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal relative overflow-hidden py-28 sm:py-36">
        <Container>
          <div className="max-w-4xl">
            <p className="text-cream/20 text-[10px] uppercase tracking-[0.5em] mb-8 font-body">
              About
            </p>
            <h1 className="font-display text-display-lg text-cream leading-[1.05]">
              Where Creativity
              <br />
              <span className="italic text-cream">Finds Form.</span>
            </h1>
            <p className="mt-8 text-cream/30 font-light leading-[1.8] max-w-xl text-[13px]">
              Sophisticated jewelry for the artistic spirit. Minimalist forms
              crafted from premium stainless steel, designed to move between
              studio and streetwear.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 sm:py-32">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
              <div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-charcoal/25">Philosophy</span>
                <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4 leading-[1.1]">
                  Design Without
                  <br />
                  <span className="italic">Compromise</span>
                </h2>
              </div>
              <div className="space-y-6 text-charcoal/45 font-light leading-[1.8]">
                <p>
                  We believe the creative community deserves jewelry that speaks
                  their language — pieces informed by architecture, sculpture,
                  and the principles of modern design.
                </p>
                <p>
                  Every LIHARA piece begins as a sketch, refined through
                  prototyping until only the essential form remains. Nothing
                  decorative. Nothing unnecessary. Just clean geometry that
                  feels right.
                </p>
                <p>
                  We chose 316L stainless steel — the same grade used in
                  surgical instruments — because it&apos;s honest. It won&apos;t
                  tarnish, fade, or pretend to be something it&apos;s not.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 bg-charcoal relative overflow-hidden">
        <Container>
          <AnimatedSection>
            <span className="text-[10px] uppercase tracking-[0.35em] text-cream/20 font-body block mb-14">
              Values
            </span>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {[
              {
                title: "Community",
                text: "LIHARA exists for designers, architects, artists, and musicians — anyone who creates. We design pieces that complement the creative life.",
              },
              {
                title: "Sustainability",
                text: "Small-batch manufacturing, recyclable packaging, and a material that lasts decades. We make less, and we make it well.",
              },
              {
                title: "Accessibility",
                text: "Thoughtful design shouldn't require a luxury budget. Every piece is priced between $35–$70 without cutting corners on quality or craft.",
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

          <div className="relative flex justify-center my-16">
            <div className="w-px h-[50%] bg-cream/5 absolute" />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-[10px] uppercase tracking-[0.35em] text-charcoal/25 mb-6">
                Designed for the creative spirit
              </p>
              <p className="font-display italic text-3xl sm:text-4xl text-charcoal leading-[1.1] mb-10">
                Jewelry that speaks your language.
              </p>
              <a
                href="/products"
                className="group inline-flex items-center gap-3 text-charcoal/40 text-[10px] uppercase tracking-[0.25em] font-body hover:text-charcoal transition-colors duration-500"
              >
                <span>View the collection</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <NewsletterSection />
    </>
  );
}
