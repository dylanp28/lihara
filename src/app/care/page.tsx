import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Care",
  description:
    "How to care for your LIHARA stainless steel jewelry. Tips for cleaning, storage, and daily wear.",
};

const tips = [
  {
    title: "Daily Wear",
    text: "316L stainless steel is built for everyday life. Water-resistant and tarnish-proof. Wear it during workouts, showers, and daily activities. Remove before chlorinated pools or salt water for best results.",
  },
  {
    title: "Cleaning",
    text: "Wipe with a soft, lint-free cloth after wearing. For a deeper clean, use warm water with a drop of mild soap, gentle brush, rinse thoroughly, and pat dry. Avoid abrasive cleaners or harsh chemicals.",
  },
  {
    title: "Storage",
    text: "Store each piece separately in its original pouch or a soft-lined box. This prevents surface scratches from contact with other jewelry. Keep in a cool, dry place away from direct sunlight.",
  },
  {
    title: "Polishing",
    text: "Minor surface scratches can be buffed out with a jewelry polishing cloth. For matte-finish pieces, rub gently in one direction to maintain the original texture. Do not use silver or gold polish.",
  },
  {
    title: "What to Avoid",
    text: "Avoid exposure to bleach, acetone, and strong chemicals. Remove jewelry before handling abrasive materials. Extreme force can deform open cuff bracelets — handle with care.",
  },
];

export default function CarePage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Care" }]} />

        <SectionHeading
          subtitle="Keep your pieces looking their best"
          align="left"
        >
          Care Instructions
        </SectionHeading>

        <div className="max-w-3xl space-y-10">
          {tips.map((tip, i) => (
            <div key={tip.title} className="flex gap-6">
              <span className="text-charcoal/20 font-display text-2xl font-light leading-none mt-1 w-8 flex-shrink-0">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-light mb-2">
                  {tip.title}
                </h3>
                <p className="text-charcoal/60 font-light leading-relaxed">
                  {tip.text}
                </p>
              </div>
            </div>
          ))}

          <div className="bg-accent/30 p-8 mt-12">
            <h3 className="font-display text-xl font-light mb-3">
              Need Help?
            </h3>
            <p className="text-charcoal/60 font-light">
              Questions about caring for a specific piece? Reach out to{" "}
              <a
                href="mailto:hello@lihara.com"
                className="text-charcoal underline underline-offset-4 hover:text-charcoal/60 transition-colors"
              >
                hello@lihara.com
              </a>{" "}
              and we&apos;ll be happy to help.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
