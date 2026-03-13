import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "LIHARA shipping information, delivery times, and return policy.",
};

export default function ShippingPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Shipping & Returns" }]} />

        <SectionHeading
          subtitle="Everything you need to know about getting your order"
          align="left"
        >
          Shipping &amp; Returns
        </SectionHeading>

        <div className="max-w-3xl space-y-16">
          {/* Shipping */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-light">Shipping</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-accent">
                    <th className="text-left py-3 pr-6 font-medium uppercase tracking-wide text-xs">
                      Method
                    </th>
                    <th className="text-left py-3 pr-6 font-medium uppercase tracking-wide text-xs">
                      Delivery
                    </th>
                    <th className="text-left py-3 font-medium uppercase tracking-wide text-xs">
                      Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="text-charcoal/70 font-light">
                  <tr className="border-b border-accent/50">
                    <td className="py-3 pr-6">Standard</td>
                    <td className="py-3 pr-6">5–7 business days</td>
                    <td className="py-3">$5 (free over $75)</td>
                  </tr>
                  <tr className="border-b border-accent/50">
                    <td className="py-3 pr-6">Express</td>
                    <td className="py-3 pr-6">2–3 business days</td>
                    <td className="py-3">$12</td>
                  </tr>
                  <tr className="border-b border-accent/50">
                    <td className="py-3 pr-6">Overnight</td>
                    <td className="py-3 pr-6">1 business day</td>
                    <td className="py-3">$25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4 text-charcoal/60 font-light leading-relaxed">
              <p>
                All orders are processed within 1–2 business days. You&apos;ll
                receive a confirmation email with tracking information once your
                order ships.
              </p>
              <p>
                We currently ship within the United States. International
                shipping will be available soon.
              </p>
            </div>
          </div>

          {/* Returns */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-light">Returns</h3>
            <div className="space-y-4 text-charcoal/60 font-light leading-relaxed">
              <p>
                We want you to love your LIHARA piece. If you&apos;re not
                completely satisfied, we accept returns within{" "}
                <strong className="font-medium text-charcoal">30 days</strong> of
                delivery.
              </p>
              <p>To be eligible for a return:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-charcoal/30 mt-0.5">·</span>
                  Items must be unworn and in original condition
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-charcoal/30 mt-0.5">·</span>
                  Original packaging must be included
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-charcoal/30 mt-0.5">·</span>
                  A proof of purchase is required
                </li>
              </ul>
              <p>
                To initiate a return, email{" "}
                <a
                  href="mailto:hello@lihara.com"
                  className="text-charcoal underline underline-offset-4 hover:text-charcoal transition-colors"
                >
                  hello@lihara.com
                </a>{" "}
                with your order number. We&apos;ll provide a prepaid return label
                and process your refund within 5–7 business days of receiving the
                item.
              </p>
            </div>
          </div>

          {/* Exchanges */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-light">Exchanges</h3>
            <p className="text-charcoal/60 font-light leading-relaxed">
              Need a different size? We offer free exchanges on all orders.
              Simply email us with your order number and the size you need, and
              we&apos;ll take care of the rest.
            </p>
          </div>

          <div className="bg-accent/30 p-8">
            <h3 className="font-display text-xl font-light mb-3">
              Questions?
            </h3>
            <p className="text-charcoal/60 font-light">
              Reach out to{" "}
              <a
                href="mailto:hello@lihara.com"
                className="text-charcoal underline underline-offset-4 hover:text-charcoal transition-colors"
              >
                hello@lihara.com
              </a>{" "}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
