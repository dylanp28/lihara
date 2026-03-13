import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FOOTER_NAV } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      <Container>
        <div className="relative z-10">
          <div className="pt-20 sm:pt-24 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link href="/" className="font-display text-2xl tracking-[0.3em]">
                LIHARA
              </Link>
              <p className="mt-6 text-cream/25 text-[13px] font-light leading-[1.8] max-w-xs">
                Minimalist stainless steel jewelry for the creative spirit.
                Designed at the intersection of architecture and adornment.
              </p>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-cream/20 mb-5">Shop</h3>
              <ul className="space-y-3">
                {FOOTER_NAV.shop.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13px] text-cream/40 hover:text-cream/70 transition-colors duration-500 font-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-cream/20 mb-5">Help</h3>
              <ul className="space-y-3">
                {FOOTER_NAV.help.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13px] text-cream/40 hover:text-cream/70 transition-colors duration-500 font-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-cream/20 mb-5">About</h3>
              <ul className="space-y-3">
                {FOOTER_NAV.about.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13px] text-cream/40 hover:text-cream/70 transition-colors duration-500 font-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-cream/20 mb-5">Connect</h3>
              <a href="mailto:hello@lihara.com" className="text-[13px] text-cream/40 hover:text-cream/70 transition-colors duration-500 font-light">
                hello@lihara.com
              </a>
            </div>
          </div>

          <div className="border-t border-cream/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-cream/15 tracking-wider">
              &copy; {new Date().getFullYear()} LIHARA
            </p>
            <p className="text-[10px] text-cream/15 tracking-wider italic font-display">
              Where creativity finds form
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
