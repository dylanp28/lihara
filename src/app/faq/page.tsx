"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    question: "Are lab-grown diamonds real diamonds?",
    answer:
      "Yes — completely. Lab-grown diamonds have the same chemical composition, crystal structure, and physical properties as mined diamonds. The only difference is origin: ours are created in a controlled environment instead of extracted from the earth. Every Lihara diamond is IGI certified and graded VS2 or better, so you know exactly what you're getting.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "3–6 weeks from the time you order. Every Lihara piece is made to order by our in-house team — we don't keep inventory on the shelf. That's how we keep quality high and prices honest. You'll receive a confirmation email when your order ships, with full tracking.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unworn and in original condition with original packaging. To start a return, email hello@lihara.com with your order number and we'll send a prepaid return label. Refunds are processed within 5–7 business days of receiving the item.",
  },
  {
    question: "What gold options do you offer?",
    answer:
      "We work in 14K and 18K solid gold — white, yellow, and rose. All three colors are available across our collections. This is solid gold, not gold-plated — your piece will hold up over years of daily wear without changing color or tarnishing.",
  },
  {
    question: "Are your diamonds certified?",
    answer:
      "Yes. Every diamond we use is IGI (International Gemological Institute) certified. All stones are VS2 clarity or better. Your order includes documentation for the diamond in your piece. IGI is one of the world's most respected gemological labs and is the industry standard for lab-grown diamond certification.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Payment plans are coming soon. We're working on a buy-now-pay-later option to make fine jewelry even more accessible. In the meantime, all major credit cards and PayPal are accepted at checkout.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-lg sm:text-xl text-charcoal group-hover:text-charcoal/70 transition-colors duration-300 pr-8">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-5 h-5 relative transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            className="w-5 h-5 text-charcoal/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 5v14M5 12h14"
            />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-6 text-charcoal/50 font-light leading-[1.9] text-[14px] max-w-2xl">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal relative overflow-hidden py-28 sm:py-36">
        <Container>
          <div className="max-w-4xl">
            <p className="text-cream/20 text-[12px] uppercase tracking-[0.5em] mb-8 font-body">
              FAQ
            </p>
            <h1 className="font-display text-display-lg text-cream leading-[1.05]">
              Questions?
              <br />
              <span className="italic text-cream">We&apos;ve Got You.</span>
            </h1>
            <p className="mt-8 text-cream/30 font-light leading-[1.8] max-w-xl text-[13px]">
              Everything you need to know about lab-grown diamonds, how we make
              our jewelry, and what to expect when you order.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ List */}
      <section className="py-24 sm:py-32">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="border-t border-charcoal/10">
                {faqs.map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Still have questions */}
      <section className="py-24 sm:py-32 bg-charcoal">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-[12px] uppercase tracking-[0.35em] text-cream/20 mb-6 font-body">
                Still have questions?
              </p>
              <p className="font-display italic text-3xl sm:text-4xl text-cream leading-[1.1] mb-10">
                We&apos;re happy to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:hello@lihara.com"
                  className="inline-block bg-cream text-charcoal px-10 py-3.5 text-[13px] uppercase tracking-[0.2em] hover:bg-cream/85 transition-colors duration-300"
                >
                  Email Us
                </a>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-cream/40 text-[12px] uppercase tracking-[0.25em] font-body hover:text-cream transition-colors duration-500"
                >
                  <span>Our story</span>
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
    </>
  );
}
