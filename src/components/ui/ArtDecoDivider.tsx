"use client";

import { motion } from "framer-motion";

export function ArtDecoDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center justify-center py-6 sm:py-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8 }}
    >
      <svg
        viewBox="0 0 600 24"
        className="w-full max-w-md h-6 text-charcoal/15"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Left line */}
        <line x1="0" y1="12" x2="240" y2="12" stroke="currentColor" strokeWidth="0.5" />
        {/* Center stepped diamond */}
        <polygon points="300,2 310,12 300,22 290,12" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <polygon points="300,6 306,12 300,18 294,12" fill="none" stroke="currentColor" strokeWidth="0.4" />
        {/* Stepped accents flanking diamond */}
        <line x1="270" y1="8" x2="270" y2="16" stroke="currentColor" strokeWidth="0.5" />
        <line x1="260" y1="10" x2="260" y2="14" stroke="currentColor" strokeWidth="0.4" />
        <line x1="330" y1="8" x2="330" y2="16" stroke="currentColor" strokeWidth="0.5" />
        <line x1="340" y1="10" x2="340" y2="14" stroke="currentColor" strokeWidth="0.4" />
        {/* Right line */}
        <line x1="360" y1="12" x2="600" y2="12" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </motion.div>
  );
}
