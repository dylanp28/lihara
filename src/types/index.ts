export type Category = "rings" | "necklaces" | "bracelets" | "earrings";

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  price: number;
  category: Category;
  description: string;
  details: string[];
  sizes?: string[];
  images: ProductImage[];
  featured: boolean;
  line?: boolean;
  latestDrop?: boolean;
  availability?: string;
}

export interface ProductImage {
  id: string;
  gradient: string;
  alt: string;
  src?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export type CartAction =
  | { type: "ADD_ITEM"; product: Product; size?: string }
  | { type: "REMOVE_ITEM"; productId: string; size?: string }
  | { type: "UPDATE_QUANTITY"; productId: string; size?: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "LOAD_CART"; items: CartItem[] };
