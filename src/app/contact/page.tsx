"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-12">
          <p className="text-[12px] uppercase tracking-[0.35em] text-charcoal/25 font-body mb-4">
            Contact
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal leading-[1.05]">
            Get in Touch
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
          <div>
            {submitted ? (
              <div className="py-12">
                <p className="font-display italic text-2xl text-charcoal mb-3">
                  Message sent.
                </p>
                <p className="text-charcoal/50 font-light">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-accent px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-accent px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full border border-accent px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-charcoal transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="sizing">Sizing</option>
                    <option value="returns">Returns &amp; Exchanges</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="press">Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-accent px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-charcoal transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-display text-xl font-light mb-3">Email</h3>
              <a href="mailto:hello@lihara.com" className="text-charcoal/60 hover:text-charcoal transition-colors font-light">
                hello@lihara.com
              </a>
            </div>

            <div>
              <h3 className="font-display text-xl font-light mb-3">Response Time</h3>
              <p className="text-charcoal/60 font-light">
                We respond to all inquiries within 24 hours during business days
                (Monday–Friday, 9am–6pm EST).
              </p>
            </div>

            <div className="bg-accent/30 p-8">
              <h3 className="font-display text-xl font-light mb-3">For the Press</h3>
              <p className="text-charcoal/60 font-light">
                For press inquiries, lookbooks, or high-resolution images,
                please contact{" "}
                <a
                  href="mailto:press@lihara.com"
                  className="text-charcoal underline underline-offset-4 hover:text-charcoal transition-colors"
                >
                  press@lihara.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
