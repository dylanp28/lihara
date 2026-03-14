"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-14 lg:h-16">
            {/* Left: mobile menu + desktop nav */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden text-charcoal p-1 -ml-1"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8" />
                </svg>
              </button>
              <nav className="hidden lg:flex items-center gap-8">
                <Link href="/products" className="text-[13px] uppercase tracking-[0.2em] text-charcoal/40 hover:text-charcoal transition-colors duration-500">
                  Shop
                </Link>
                <Link href="/about" className="text-[13px] uppercase tracking-[0.2em] text-charcoal/40 hover:text-charcoal transition-colors duration-500">
                  About
                </Link>
              </nav>
            </div>

            {/* Center: logo */}
            <div className="flex justify-center">
              <Link href="/" className="font-display text-xl lg:text-[1.35rem] tracking-[0.3em] text-charcoal">
                LIHARA
              </Link>
            </div>

            {/* Right: cart */}
            <div className="flex items-center justify-end">
              <button
                onClick={toggleCart}
                className="relative p-1 text-charcoal/60 hover:text-charcoal transition-colors duration-500"
                aria-label={`Cart (${itemCount} items)`}
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {itemCount > 0 && (
                       <span className="absolute -top-0.5 -right-1 bg-charcoal text-cream text-[8px] font-medium w-3.5 h-3.5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
