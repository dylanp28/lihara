"use client";

const ITEMS = [
  "Designed for Creatives",
  "316L Stainless Steel",
  "Accessible Luxury",
  "Geometric Forms",
  "Hypoallergenic",
  "Water Resistant",
  "Unisex",
];

function DecoDiamond() {
  return (
    <svg viewBox="0 0 12 12" className="w-2 h-2 flex-shrink-0 opacity-30">
      <polygon points="6,0 12,6 6,12 0,6" fill="currentColor" />
    </svg>
  );
}

export function Marquee() {
  const content = ITEMS.map((item, i) => (
    <span key={i} className="flex items-center gap-8 whitespace-nowrap">
      <span>{item}</span>
      <DecoDiamond />
    </span>
  ));

  return (
    <div className="bg-charcoal py-4 overflow-hidden select-none">
      <div className="flex animate-marquee gap-8 text-cream/20 text-[10px] uppercase tracking-[0.4em] font-body">
        {content}
        {content}
      </div>
    </div>
  );
}
