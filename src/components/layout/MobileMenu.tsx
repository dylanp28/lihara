"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 h-full w-72 bg-cream z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-14">
              <Link href="/" onClick={onClose} className="font-display text-xl tracking-[0.3em] text-charcoal">
                LIHARA
              </Link>
              <button onClick={onClose} className="text-charcoal/40 hover:text-charcoal transition-colors" aria-label="Close menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 pt-8 pb-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block px-6 py-3.5 text-base font-light text-charcoal/70 hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-6 pb-8">
              <p className="text-[12px] text-charcoal/25 tracking-wider italic font-display">
                Where creativity finds form
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
