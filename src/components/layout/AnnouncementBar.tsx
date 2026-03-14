"use client";

import { useState } from "react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-charcoal text-cream/40 text-center text-[11px] uppercase tracking-[0.4em] py-2.5 px-8 relative font-body">
      <p>Complimentary shipping on orders over $75</p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/20 hover:text-cream/50 transition-colors duration-500"
        aria-label="Dismiss"
      >
        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
