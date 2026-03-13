import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "geometric-signet-ring",
    name: "Geometric Signet Ring",
    price: 45,
    category: "rings",
    description:
      "A contemporary take on the classic signet ring. Featuring clean geometric lines and a brushed finish, this piece bridges the gap between tradition and modern design. Crafted from premium 316L stainless steel for lasting durability.",
    details: [
      "316L stainless steel",
      "Brushed finish with polished edges",
      "Geometric face design",
      "Hypoallergenic",
      "Water resistant",
    ],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    images: [
      { id: "1a", gradient: "from-amber-300 via-yellow-200 to-orange-300", alt: "Geometric Signet Ring - Front" },
      { id: "1b", gradient: "from-amber-200 via-yellow-100 to-orange-200", alt: "Geometric Signet Ring - Side" },
      { id: "1c", gradient: "from-orange-200 via-amber-100 to-yellow-200", alt: "Geometric Signet Ring - Detail" },
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "minimalist-chain-necklace",
    name: "Minimalist Chain Necklace",
    price: 55,
    category: "necklaces",
    description:
      "Understated elegance in its purest form. This fine chain necklace features a subtle bar pendant that catches the light beautifully. Layer it or wear it alone — it adapts to your style effortlessly.",
    details: [
      "316L stainless steel",
      "Fine cable chain",
      "Minimal bar pendant",
      "Adjustable length: 16-18 inches",
      "Lobster clasp closure",
    ],
    sizes: ["16in", "17in", "18in"],
    images: [
      { id: "2a", gradient: "from-slate-300 via-gray-200 to-zinc-300", alt: "Minimalist Chain Necklace - Full" },
      { id: "2b", gradient: "from-slate-200 via-gray-100 to-zinc-200", alt: "Minimalist Chain Necklace - Detail" },
      { id: "2c", gradient: "from-zinc-200 via-slate-100 to-gray-200", alt: "Minimalist Chain Necklace - Worn" },
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "architectural-cuff-bracelet",
    name: "Architectural Cuff Bracelet",
    price: 50,
    category: "bracelets",
    description:
      "Inspired by brutalist architecture, this open cuff bracelet makes a refined statement. The angular lines and matte finish create a piece that's both bold and wearable for any occasion.",
    details: [
      "316L stainless steel",
      "Open cuff design — adjustable fit",
      "Matte finish",
      "Width: 8mm",
      "Lightweight and comfortable",
    ],
    sizes: ["S", "M", "L"],
    images: [
      { id: "3a", gradient: "from-rose-300 via-pink-200 to-amber-300", alt: "Architectural Cuff Bracelet - Front" },
      { id: "3b", gradient: "from-rose-200 via-pink-100 to-amber-200", alt: "Architectural Cuff Bracelet - Side" },
      { id: "3c", gradient: "from-amber-200 via-rose-100 to-pink-200", alt: "Architectural Cuff Bracelet - Detail" },
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "linear-bar-earrings",
    name: "Linear Bar Earrings",
    price: 40,
    category: "earrings",
    description:
      "Clean vertical lines that elongate and frame the face. These bar earrings combine minimalist aesthetics with architectural precision, making them perfect for both casual and formal settings.",
    details: [
      "316L stainless steel",
      "Drop length: 35mm",
      "Post back closure",
      "Mirror polish finish",
      "Sold as pair",
    ],
    images: [
      { id: "4a", gradient: "from-violet-300 via-purple-200 to-slate-300", alt: "Linear Bar Earrings - Front" },
      { id: "4b", gradient: "from-violet-200 via-purple-100 to-slate-200", alt: "Linear Bar Earrings - Side" },
      { id: "4c", gradient: "from-slate-200 via-violet-100 to-purple-200", alt: "Linear Bar Earrings - Worn" },
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "modern-pendant-necklace",
    name: "Modern Pendant Necklace",
    price: 60,
    category: "necklaces",
    description:
      "A sculptural pendant that sits at the perfect length. The geometric form catches and plays with light, creating an ever-changing display. A statement piece that speaks to the artistically inclined.",
    details: [
      "316L stainless steel",
      "Geometric pendant: 20mm",
      "Cable chain",
      "Length: 20 inches",
      "Spring ring clasp",
    ],
    sizes: ["20in"],
    images: [
      { id: "5a", gradient: "from-gray-300 via-slate-200 to-zinc-300", alt: "Modern Pendant Necklace - Full" },
      { id: "5b", gradient: "from-gray-200 via-slate-100 to-zinc-200", alt: "Modern Pendant Necklace - Pendant" },
      { id: "5c", gradient: "from-zinc-200 via-gray-100 to-slate-200", alt: "Modern Pendant Necklace - Detail" },
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "geometric-stud-earrings",
    name: "Geometric Stud Earrings",
    price: 35,
    category: "earrings",
    description:
      "Bold geometry scaled down to a refined stud. These hexagonal earrings bring architectural interest without overwhelming — perfect for daily wear or as part of a curated ear stack.",
    details: [
      "316L stainless steel",
      "Hexagonal shape: 8mm",
      "Push back closure",
      "Polished finish",
      "Sold as pair",
    ],
    images: [
      { id: "6a", gradient: "from-purple-300 via-violet-200 to-indigo-300", alt: "Geometric Stud Earrings - Front" },
      { id: "6b", gradient: "from-purple-200 via-violet-100 to-indigo-200", alt: "Geometric Stud Earrings - Side" },
      { id: "6c", gradient: "from-indigo-200 via-purple-100 to-violet-200", alt: "Geometric Stud Earrings - Pair" },
    ],
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}
