"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <AnimatedSection>
          <div className="max-w-md">
            <h2 className="font-display italic text-3xl sm:text-4xl text-charcoal leading-[1.1]">
              Stay in the loop.
            </h2>
            <p className="mt-4 text-charcoal/30 text-[13px] font-light">
              New collections, exclusive pieces, and stories from the studio.
            </p>

            {submitted ? (
              <p className="mt-8 text-charcoal/60 text-[13px] font-display italic">
                Thank you for subscribing.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex items-end gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border-b border-charcoal/15 text-charcoal px-0 py-2.5 text-[13px] placeholder:text-charcoal/20 focus:outline-none focus:border-charcoal/40 transition-colors duration-500 font-light"
                  />
                </div>
                <button
                  type="submit"
                  className="text-[12px] uppercase tracking-[0.25em] text-charcoal/40 hover:text-charcoal transition-colors duration-500 font-body pb-2.5 flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
