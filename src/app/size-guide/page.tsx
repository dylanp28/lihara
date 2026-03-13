import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Size Guide",
  description: "Find your perfect LIHARA ring, bracelet, and necklace size.",
};

const ringSizes = [
  { us: "5", mm: "15.7", circ: "49.3" },
  { us: "6", mm: "16.5", circ: "51.8" },
  { us: "7", mm: "17.3", circ: "54.4" },
  { us: "8", mm: "18.1", circ: "57.0" },
  { us: "9", mm: "19.0", circ: "59.5" },
  { us: "10", mm: "19.8", circ: "62.1" },
  { us: "11", mm: "20.6", circ: "64.6" },
];

const braceletSizes = [
  { label: "S", wrist: '5.5–6"', circ: "14–15 cm" },
  { label: "M", wrist: '6–7"', circ: "15–18 cm" },
  { label: "L", wrist: '7–8"', circ: "18–20 cm" },
];

export default function SizeGuidePage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Size Guide" }]} />

        <SectionHeading
          subtitle="Find the perfect fit for every piece"
          align="left"
        >
          Size Guide
        </SectionHeading>

        <div className="max-w-3xl space-y-16">
          {/* Rings */}
          <div>
            <h3 className="font-display text-2xl font-light mb-6">Rings</h3>
            <p className="text-charcoal/60 font-light mb-6">
              Wrap a strip of paper around your finger, mark where it overlaps,
              then measure the length in millimeters and match it to the
              circumference below.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-accent">
                    <th className="text-left py-3 pr-6 font-medium uppercase tracking-wide text-xs">
                      US Size
                    </th>
                    <th className="text-left py-3 pr-6 font-medium uppercase tracking-wide text-xs">
                      Inner Diameter (mm)
                    </th>
                    <th className="text-left py-3 font-medium uppercase tracking-wide text-xs">
                      Circumference (mm)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ringSizes.map((s) => (
                    <tr key={s.us} className="border-b border-accent/50">
                      <td className="py-3 pr-6">{s.us}</td>
                      <td className="py-3 pr-6">{s.mm}</td>
                      <td className="py-3">{s.circ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bracelets */}
          <div>
            <h3 className="font-display text-2xl font-light mb-6">Bracelets</h3>
            <p className="text-charcoal/60 font-light mb-6">
              Measure around your wrist just above the wrist bone. Our cuff
              bracelets have an open design that allows for a flexible fit.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-accent">
                    <th className="text-left py-3 pr-6 font-medium uppercase tracking-wide text-xs">
                      Size
                    </th>
                    <th className="text-left py-3 pr-6 font-medium uppercase tracking-wide text-xs">
                      Wrist
                    </th>
                    <th className="text-left py-3 font-medium uppercase tracking-wide text-xs">
                      Circumference
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {braceletSizes.map((s) => (
                    <tr key={s.label} className="border-b border-accent/50">
                      <td className="py-3 pr-6">{s.label}</td>
                      <td className="py-3 pr-6">{s.wrist}</td>
                      <td className="py-3">{s.circ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Necklaces */}
          <div>
            <h3 className="font-display text-2xl font-light mb-6">Necklaces</h3>
            <p className="text-charcoal/60 font-light leading-relaxed">
              Our necklaces are available in standard lengths. The{" "}
              <strong className="font-medium">16&quot;</strong> sits at the
              collarbone, <strong className="font-medium">18&quot;</strong> falls
              just below, and{" "}
              <strong className="font-medium">20&quot;</strong> rests at the
              chest. When in doubt, 18&quot; is the most versatile length.
            </p>
          </div>

          {/* Tips */}
          <div className="bg-accent/30 p-8">
            <h3 className="font-display text-2xl font-light mb-4">
              Sizing Tips
            </h3>
            <ul className="space-y-3 text-charcoal/60 font-light">
              <li className="flex items-start gap-2">
                <span className="text-charcoal/30 mt-0.5">·</span>
                Measure at the end of the day when fingers are at their largest.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-charcoal/30 mt-0.5">·</span>
                If you&apos;re between sizes, we recommend sizing up for comfort.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-charcoal/30 mt-0.5">·</span>
                Temperature affects finger size — cold weather causes shrinkage.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-charcoal/30 mt-0.5">·</span>
                Contact us at hello@lihara.com for personalized sizing help.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
