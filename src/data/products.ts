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
    id: "21",
    slug: "star-chain-bracelet",
    name: "Star Chain Bracelet",
    subtitle: "Celestial link",
    price: 80,
    category: "bracelets",
    description:
      "A twisted chain bracelet anchored by a sculpted starburst centerpiece set with a single stone. The contrast between the fluid chain and the sharp star creates a bracelet that commands attention from every angle.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Starburst centerpiece with stone",
      "Lobster clasp with extension",
      "Length: 7-8 inches",
    ],
    sizes: ["One Size"],
    images: [
      { id: "21a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Star Chain Bracelet - Front", src: "/images/products/star-chain-bracelet.png" },
    ],
    featured: false,
    latestDrop: true,
  },
  {
    id: "22",
    slug: "cross-oval-bracelet",
    name: "Cross Oval Bracelet",
    subtitle: "Linked devotion",
    price: 65,
    category: "bracelets",
    description:
      "Open oval links joined by miniature cross connectors. The alternating rhythm creates a bracelet that reads as both delicate and deliberate — a modern take on a devotional chain.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Oval link with cross connectors",
      "Lobster clasp with extension",
      "Length: 7-8 inches",
    ],
    sizes: ["One Size"],
    images: [
      { id: "22a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Cross Oval Bracelet - Front", src: "/images/products/cross-oval-bracelet.png" },
    ],
    featured: false,
    latestDrop: true,
  },
  {
    id: "23",
    slug: "cross-chain-bracelet",
    name: "Cross Chain Bracelet",
    subtitle: "Quiet faith",
    price: 45,
    category: "bracelets",
    description:
      "Three small crosses spaced along a fine cable chain. Understated enough for every day, meaningful enough to notice. The lightest piece in the bracelet collection.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Three cross stations",
      "Fine cable chain",
      "Lobster clasp with extension",
      "Length: 6.5-7.5 inches",
    ],
    sizes: ["One Size"],
    images: [
      { id: "23a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Cross Chain Bracelet - Front", src: "/images/products/cross-chain-bracelet.png" },
    ],
    featured: false,
    latestDrop: true,
  },
  {
    id: "24",
    slug: "spike-charm-bracelet",
    name: "Spike Charm Bracelet",
    subtitle: "Edge on a chain",
    price: 50,
    category: "bracelets",
    description:
      "Miniature spike and cross charms hanging from a delicate cable chain. The dagger-shaped drops add movement and edge without the weight — subtle hardware that catches light as you move.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Spike and cross charms",
      "Fine cable chain",
      "Lobster clasp with extension",
      "Length: 6.5-7.5 inches",
    ],
    sizes: ["One Size"],
    images: [
      { id: "24a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Spike Charm Bracelet - Front", src: "/images/products/spike-charm-bracelet.png" },
    ],
    featured: false,
    latestDrop: true,
  },
  {
    id: "25",
    slug: "curb-id-bracelet",
    name: "Curb ID Bracelet",
    subtitle: "Signed in steel",
    price: 75,
    category: "bracelets",
    description:
      "A heavy curb chain with a smooth ID plate featuring a diamond-shaped star setting. The weight and polish of the curb links give this serious wrist presence — an everyday bracelet with intent.",
    details: [
      "316L stainless steel",
      "Polished curb chain",
      "ID plate with star setting",
      "Lobster clasp with extension",
      "Width: 8mm",
      "Length: 7.5-8.5 inches",
    ],
    sizes: ["One Size"],
    images: [
      { id: "25a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Curb ID Bracelet - Front", src: "/images/products/curb-id-bracelet.png" },
    ],
    featured: false,
    latestDrop: true,
  },
  {
    id: "26",
    slug: "spiked-heart-necklace",
    name: "Spiked Heart Necklace",
    subtitle: "Love with edge",
    price: 55,
    category: "necklaces",
    description:
      "A faceted heart pendant ringed with sharp spikes, set with a single center stone on a curb chain. The collision of soft and sharp — a heart that doesn't ask for permission.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Spiked heart pendant with stone",
      "Curb chain",
      "Length: 18 inches",
      "Lobster clasp",
    ],
    sizes: ["18in"],
    images: [
      { id: "26a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Spiked Heart Necklace - Front", src: "/images/products/spiked-heart-necklace.png" },
    ],
    featured: false,
    latestDrop: true,
  },
  {
    id: "27",
    slug: "blade-pendant-necklace",
    name: "Blade Pendant",
    subtitle: "Sharp descent",
    price: 50,
    category: "necklaces",
    description:
      "A sculpted blade-shaped pendant with a star-set stone, hung on a cable chain. The twisted, tapered form catches light from every angle — a pendant that moves between elegant and dangerous.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Blade pendant with star setting",
      "Cable chain",
      "Length: 20 inches",
      "Lobster clasp",
    ],
    sizes: ["20in"],
    images: [
      { id: "27a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Blade Pendant - Front", src: "/images/products/blade-pendant-necklace.png" },
    ],
    featured: false,
    latestDrop: true,
  },
  {
    id: "28",
    slug: "gothic-cross-necklace",
    name: "Gothic Cross Necklace",
    subtitle: "Cathedral steel",
    price: 52,
    category: "necklaces",
    description:
      "A pointed gothic cross with flared arms and a center stone, on a cable chain. The cathedral-inspired silhouette gives this cross real presence — architectural devotion you can wear.",
    details: [
      "316L stainless steel",
      "Polished finish",
      "Gothic cross pendant with stone",
      "Cable chain",
      "Length: 20 inches",
      "Lobster clasp",
    ],
    sizes: ["20in"],
    images: [
      { id: "28a", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Gothic Cross Necklace - Front", src: "/images/products/gothic-cross-necklace.png" },
    ],
    featured: false,
    latestDrop: true,
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

export function getLatestDrops(category: string): Product[] {
  return products.filter((p) => p.latestDrop && p.category === category);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const shop = products.filter((p) => !p.line);
  return shop
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(shop.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
