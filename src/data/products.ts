import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "lnx-by-lihara",
    name: "LNX by LIHARA",
    subtitle: "Sculpted edge. Worn bold.",
    price: 65,
    category: "necklaces",
    description:
      "A sculptural chain that commands attention. The LNX features interconnected spiked links in polished stainless steel — bold, architectural, and unmistakably LIHARA. Available as a necklace and matching bracelet set.",
    details: [
      "316L stainless steel",
      "Polished mirror finish",
      "Spiked link construction",
      "Necklace + bracelet set",
      "Hypoallergenic",
      "Water resistant",
    ],
    sizes: ["S", "M", "L"],
    images: [
      { id: "1a", gradient: "from-gray-300 via-slate-200 to-zinc-300", alt: "LNX by LIHARA - Front", src: "/images/products/lnx-by-lihara.png" },
      { id: "1b", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "LNX by LIHARA - Detail" },
      { id: "1c", gradient: "from-zinc-200 via-gray-100 to-slate-200", alt: "LNX by LIHARA - Styled" },
    ],
    featured: true,
    line: true,
    availability: "This isn't always available.",
  },
  {
    id: "2",
    slug: "liqd-by-lihara",
    name: "LIQD by LIHARA",
    subtitle: "Organic flow captured in steel",
    price: 55,
    category: "rings",
    description:
      "Fluid forms frozen in steel. The LIQD collection captures the tension between motion and stillness — organic curves, molten silhouettes, and sculptural details that feel like they're still moving. Two distinct ring styles, one shared language.",
    details: [
      "316L stainless steel",
      "Organic sculptural form",
      "Polished mirror finish",
      "Set of two ring styles",
      "Hypoallergenic",
      "Water resistant",
    ],
    sizes: ["5", "6", "7", "8", "9", "10"],
    images: [
      { id: "2a", gradient: "from-slate-300 via-gray-200 to-zinc-300", alt: "LIQD by LIHARA - Pair", src: "/images/products/liqd-by-lihara.png" },
      { id: "2b", gradient: "from-slate-200 via-gray-100 to-zinc-200", alt: "LIQD by LIHARA - Detail" },
      { id: "2c", gradient: "from-zinc-200 via-slate-100 to-gray-200", alt: "LIQD by LIHARA - Styled" },
    ],
    featured: true,
    line: true,
    availability: "These drop and change often — like 20 for a given style and never ever again.",
  },
  {
    id: "3",
    slug: "charms",
    name: "CHARMS",
    subtitle: "Symbols cast in steel",
    price: 40,
    category: "earrings",
    description:
      "Five pendants, one hoop system. Cross, star, heart, blade heart, and flower — each charm clips onto a polished huggie hoop, so you can mix your story daily. Collect them all or start with one.",
    details: [
      "316L stainless steel",
      "Polished gunmetal finish",
      "Interchangeable charm system",
      "Huggie hoop closure",
      "Sold individually or as set",
      "Hypoallergenic",
    ],
    sizes: ["One Size"],
    images: [
      { id: "3a", gradient: "from-gray-400 via-zinc-300 to-gray-400", alt: "CHARMS - Collection", src: "/images/products/charms.png" },
      { id: "3b", gradient: "from-gray-300 via-zinc-200 to-gray-300", alt: "CHARMS - Detail" },
      { id: "3c", gradient: "from-zinc-300 via-gray-200 to-zinc-300", alt: "CHARMS - Styled" },
    ],
    featured: true,
    line: true,
    availability: "This is always available.",
  },
  {
    id: "4",
    slug: "sculpted-hoops",
    name: "Sculpted Hoops",
    subtitle: "Soft geometry",
    price: 42,
    category: "earrings",
    description:
      "Organic, teardrop-shaped hoops with a fluid silhouette. The asymmetric form gives these a sculptural quality that feels more like art than accessory. Hinged closure for easy on and off.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Organic sculpted shape",
      "Hinged closure",
      "Drop: 25mm",
      "Sold as pair",
    ],
    images: [
      { id: "4a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Sculpted Hoops - Front", src: "/images/products/sculpted-hoops.png" },
      { id: "4b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Sculpted Hoops - Detail" },
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "link-pendant",
    name: "Link Pendant",
    subtitle: "Connected forms",
    price: 55,
    category: "necklaces",
    description:
      "Two interlocking oval links suspended from a fine cable chain. The double-link form creates a subtle sense of movement — a piece that shifts with you throughout the day.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Double-link pendant",
      "Cable chain",
      "Length: 18 inches",
      "Lobster clasp",
    ],
    sizes: ["18in"],
    images: [
      { id: "5a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Link Pendant - Front", src: "/images/products/link-pendant.png" },
      { id: "5b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Link Pendant - Detail" },
    ],
    featured: false,
  },
  {
    id: "9",
    slug: "abstract-pendant",
    name: "Abstract Pendant",
    subtitle: "Organic geometry",
    price: 60,
    category: "necklaces",
    description:
      "A freeform pendant with an organic silhouette, accented by a natural stone setting. The asymmetric shape makes every angle different — sculptural jewelry that doubles as wearable art.",
    details: [
      "316L stainless steel",
      "Natural stone accent",
      "Organic freeform shape",
      "Cable chain",
      "Length: 20 inches",
      "Spring ring clasp",
    ],
    sizes: ["20in"],
    images: [
      { id: "9a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Abstract Pendant - Front", src: "/images/products/abstract-pendant.png" },
      { id: "9b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Abstract Pendant - Detail" },
    ],
    featured: false,
  },
  {
    id: "10",
    slug: "heart-pendant",
    name: "Heart Pendant",
    subtitle: "Classic rewritten",
    price: 45,
    category: "necklaces",
    description:
      "A heart pendant, but not the one you've seen before. The open geometric form and faceted edges give this classic symbol a modern, architectural treatment. Delicate chain, bold intention.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Open heart pendant",
      "Fine cable chain",
      "Length: 16 inches",
      "Lobster clasp",
    ],
    sizes: ["16in"],
    images: [
      { id: "10a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Heart Pendant - Front", src: "/images/products/heart-pendant.png" },
      { id: "10b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Heart Pendant - Detail" },
    ],
    featured: false,
  },
  {
    id: "11",
    slug: "segmented-cross",
    name: "Segmented Cross",
    subtitle: "Structured devotion",
    price: 55,
    category: "necklaces",
    description:
      "A cross pendant built from stacked segments, hung on a heavy box chain. The textured, architectural construction gives this symbol real weight — both physical and visual.",
    details: [
      "316L stainless steel",
      "Oxidized finish",
      "Segmented cross pendant",
      "Box chain",
      "Length: 22 inches",
      "Lobster clasp",
    ],
    sizes: ["22in"],
    images: [
      { id: "11a", gradient: "from-gray-300 via-zinc-200 to-slate-300", alt: "Segmented Cross - Front", src: "/images/products/segmented-cross.png" },
      { id: "11b", gradient: "from-gray-200 via-zinc-100 to-slate-200", alt: "Segmented Cross - Detail" },
    ],
    featured: false,
  },
  {
    id: "12",
    slug: "rope-cross",
    name: "Rope Cross",
    subtitle: "Twisted tradition",
    price: 50,
    category: "necklaces",
    description:
      "A cross pendant formed from twisted rope-textured steel on a box chain. The braided detail adds depth and character — a piece that feels both timeless and distinctly handcrafted.",
    details: [
      "316L stainless steel",
      "Antiqued rope texture",
      "Cross pendant",
      "Box chain",
      "Length: 22 inches",
      "Lobster clasp",
    ],
    sizes: ["22in"],
    images: [
      { id: "12a", gradient: "from-gray-300 via-zinc-200 to-slate-300", alt: "Rope Cross - Front", src: "/images/products/rope-cross.png" },
      { id: "12b", gradient: "from-gray-200 via-zinc-100 to-slate-200", alt: "Rope Cross - Detail" },
    ],
    featured: false,
  },
  {
    id: "13",
    slug: "pearl-solitaire",
    name: "Pearl Solitaire",
    subtitle: "One point of light",
    price: 40,
    category: "necklaces",
    description:
      "A single bezel-set pearl on a fine chain. Nothing more, nothing less. The simplest piece in the collection — and often the one people reach for most.",
    details: [
      "316L stainless steel",
      "Bezel-set freshwater pearl",
      "Fine cable chain",
      "Length: 16 inches",
      "Spring ring clasp",
    ],
    sizes: ["16in"],
    images: [
      { id: "13a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Pearl Solitaire - Front", src: "/images/products/pearl-solitaire.png" },
      { id: "13b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Pearl Solitaire - Detail" },
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "geo-drop-earrings",
    name: "Geo Drop Earrings",
    subtitle: "Angular movement",
    price: 38,
    category: "earrings",
    description:
      "A geometric drop pendant hung from a small post stud. The angular, open shape swings freely and catches light as it moves — minimal weight, maximum presence.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Post back with drop pendant",
      "Drop: 20mm",
      "Sold as pair",
    ],
    images: [
      { id: "6a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Geo Drop Earrings - Front", src: "/images/products/geo-drop-earrings.png" },
      { id: "6b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Geo Drop Earrings - Detail" },
    ],
    featured: false,
  },
  {
    id: "7",
    slug: "brushed-band",
    name: "Brushed Band",
    subtitle: "Clean edge. Quiet presence.",
    price: 40,
    category: "rings",
    description:
      "A refined band with a satin brushed face and subtly textured edges. No logos, no excess — just a clean silhouette that pairs with everything. The kind of ring you never take off.",
    details: [
      "316L stainless steel",
      "Brushed satin finish",
      "Textured edge detail",
      "Width: 6mm",
      "Comfort fit interior",
      "Hypoallergenic",
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    images: [
      { id: "7a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Brushed Band - Front", src: "/images/products/brushed-band.png" },
      { id: "7b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Brushed Band - Side" },
      { id: "7c", gradient: "from-zinc-100 via-gray-50 to-slate-100", alt: "Brushed Band - Detail" },
    ],
    featured: false,
  },
  {
    id: "8",
    slug: "channel-band",
    name: "Channel Band",
    subtitle: "Black inlay. Sharp contrast.",
    price: 50,
    category: "rings",
    description:
      "A polished steel band with a recessed channel of black stones running the full circumference. The contrast between bright steel and dark inlay gives it a bold, architectural feel without being loud.",
    details: [
      "316L stainless steel",
      "Polished mirror finish",
      "Black channel-set stones",
      "Width: 7mm",
      "Comfort fit interior",
      "Hypoallergenic",
      "Water resistant",
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    images: [
      { id: "8a", gradient: "from-gray-300 via-zinc-200 to-slate-300", alt: "Channel Band - Front", src: "/images/products/channel-band.png" },
      { id: "8b", gradient: "from-gray-200 via-zinc-100 to-slate-200", alt: "Channel Band - Side" },
      { id: "8c", gradient: "from-slate-200 via-zinc-100 to-gray-200", alt: "Channel Band - Detail" },
    ],
    featured: false,
  },
  {
    id: "14",
    slug: "crossover-cuff",
    name: "Crossover Cuff",
    subtitle: "Layered without layers",
    price: 55,
    category: "bracelets",
    description:
      "Three bands woven into a single open cuff. The crossover design gives the look of stacked bracelets without the hassle — one piece, full impact. Polished steel that catches light from every angle.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Open cuff — adjustable fit",
      "Triple crossover design",
      "Width: 20mm",
      "Lightweight",
    ],
    sizes: ["S/M", "M/L"],
    images: [
      { id: "14a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Crossover Cuff - Front", src: "/images/products/crossover-cuff.png" },
      { id: "14b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Crossover Cuff - Detail" },
    ],
    featured: false,
  },
  {
    id: "15",
    slug: "cross-link-bracelet",
    name: "Cross Link Bracelet",
    subtitle: "Chain, elevated",
    price: 50,
    category: "bracelets",
    description:
      "Oval links joined by cross-shaped connectors. The alternating rhythm of round and angular creates a bracelet that feels both classic and unmistakably modern. Lobster clasp with extension chain for adjustable fit.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Cross-link construction",
      "Lobster clasp with extension",
      "Length: 7-8 inches",
    ],
    sizes: ["One Size"],
    images: [
      { id: "15a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Cross Link Bracelet - Front", src: "/images/products/cross-link-bracelet.png" },
      { id: "15b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Cross Link Bracelet - Detail" },
    ],
    featured: false,
  },
  {
    id: "16",
    slug: "franco-chain-bracelet",
    name: "Franco Chain Bracelet",
    subtitle: "Woven steel",
    price: 45,
    category: "bracelets",
    description:
      "A tight franco weave that lies flat on the wrist. The V-shaped links create a herringbone-like pattern with serious weight and presence. Finished with a clean magnetic clasp.",
    details: [
      "316L stainless steel",
      "Polished franco weave",
      "Magnetic clasp closure",
      "Width: 5mm",
      "Length: 8 inches",
    ],
    sizes: ["One Size"],
    images: [
      { id: "16a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Franco Chain Bracelet - Front", src: "/images/products/franco-chain-bracelet.png" },
      { id: "16b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Franco Chain Bracelet - Detail" },
    ],
    featured: false,
  },
  {
    id: "17",
    slug: "cross-station-bracelet",
    name: "Cross Station Bracelet",
    subtitle: "Quiet symbols",
    price: 38,
    category: "bracelets",
    description:
      "Delicate crosses spaced along a fine chain — subtle enough for everyday, meaningful enough to notice. The lightest bracelet in the collection, designed to be worn and forgotten about.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Cross station design",
      "Fine cable chain",
      "Lobster clasp with extension",
      "Length: 6.5-7.5 inches",
    ],
    sizes: ["One Size"],
    images: [
      { id: "17a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Cross Station Bracelet - Front", src: "/images/products/cross-station-bracelet.png" },
      { id: "17b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Cross Station Bracelet - Detail" },
    ],
    featured: false,
  },
  {
    id: "18",
    slug: "cross-studs",
    name: "Cross Studs",
    subtitle: "Small symbol, sharp detail",
    price: 32,
    category: "earrings",
    description:
      "Pavé-set cross studs that sit flush against the ear. The stone detailing gives these a subtle sparkle without going oversize — a quiet statement piece for every day.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Pavé-set stones",
      "Push back closure",
      "Size: 10mm",
      "Sold as pair",
    ],
    images: [
      { id: "18a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Cross Studs - Front", src: "/images/products/cross-studs.png" },
      { id: "18b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Cross Studs - Detail" },
    ],
    featured: false,
  },
  {
    id: "19",
    slug: "tapered-hoops",
    name: "Tapered Hoops",
    subtitle: "Bold curve",
    price: 45,
    category: "earrings",
    description:
      "Wide hoops that taper from thick at the base to thin at the top. The sculpted profile creates a bold, modern silhouette — statement hoops that still feel wearable.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Tapered width design",
      "Hinged closure",
      "Diameter: 30mm",
      "Sold as pair",
    ],
    images: [
      { id: "19a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Tapered Hoops - Front", src: "/images/products/tapered-hoops.png" },
      { id: "19b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Tapered Hoops - Detail" },
    ],
    featured: false,
  },
  {
    id: "20",
    slug: "dome-hoops",
    name: "Dome Hoops",
    subtitle: "Volume, polished",
    price: 48,
    category: "earrings",
    description:
      "Rounded, domed hoops with serious presence. The hollow construction keeps them lightweight despite their size — all the impact of a chunky hoop without the weight pulling on your ear.",
    details: [
      "316L stainless steel",
      "Mirror polish finish",
      "Hollow dome construction",
      "Hinged closure",
      "Diameter: 28mm",
      "Sold as pair",
    ],
    images: [
      { id: "20a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Dome Hoops - Front", src: "/images/products/dome-hoops.png" },
      { id: "20b", gradient: "from-gray-100 via-slate-50 to-zinc-100", alt: "Dome Hoops - Detail" },
    ],
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getShopProducts(): Product[] {
  return products.filter((p) => !p.line);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category && !p.line);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getLineProducts(): Product[] {
  return products.filter((p) => p.line);
}

export function getLineBySlug(slug: string): Product | undefined {
  return products.find((p) => p.line && p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const shop = products.filter((p) => !p.line);
  return shop
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(shop.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
