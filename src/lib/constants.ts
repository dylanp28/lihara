export const SITE_NAME = "LIHARA";
export const SITE_DESCRIPTION = "Unisex jewelry for creative professionals. Minimalist designs crafted from premium stainless steel.";
export const SITE_URL = "https://lihara.com";

export const NAV_LINKS = [
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Care", href: "/care" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_NAV = {
  shop: [
    { label: "All Jewelry", href: "/products" },
    { label: "Rings", href: "/products?category=rings" },
    { label: "Necklaces", href: "/products?category=necklaces" },
    { label: "Bracelets", href: "/products?category=bracelets" },
    { label: "Earrings", href: "/products?category=earrings" },
  ],
  help: [
    { label: "Size Guide", href: "/size-guide" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Care Instructions", href: "/care" },
    { label: "Contact Us", href: "/contact" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Materials", href: "/about#materials" },
    { label: "Sustainability", href: "/about#sustainability" },
  ],
} as const;

export const FREE_SHIPPING_THRESHOLD = 75;

export const CATEGORIES = [
  { slug: "rings", label: "Rings", description: "Bold geometric forms for everyday expression" },
  { slug: "necklaces", label: "Necklaces", description: "Clean lines that move with you" },
  { slug: "bracelets", label: "Bracelets", description: "Architectural accents for the wrist" },
  { slug: "earrings", label: "Earrings", description: "Modern silhouettes that frame the face" },
] as const;

export const CATEGORY_GRADIENTS: Record<string, string> = {
  rings: "from-amber-200 via-yellow-100 to-orange-200",
  necklaces: "from-slate-200 via-gray-100 to-zinc-200",
  bracelets: "from-rose-200 via-pink-100 to-amber-200",
  earrings: "from-violet-200 via-purple-100 to-slate-200",
};

export const CATEGORY_IMAGES: Record<string, string> = {
  bracelets: "/images/products/bracelets-category.png",
  necklaces: "/images/products/necklaces-category.png",
};
