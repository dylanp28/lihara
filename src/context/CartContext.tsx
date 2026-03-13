"use client";

import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { CartState, CartAction, CartItem, Product } from "@/types";

const CART_STORAGE_KEY = "lihara-cart";

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const key = `${action.product.id}-${action.size ?? ""}`;
      const existingIndex = state.items.findIndex(
        (item) => `${item.product.id}-${item.size ?? ""}` === key
      );

      if (existingIndex > -1) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return { ...state, items: updated, isOpen: true };
      }

      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1, size: action.size }],
        isOpen: true,
      };
    }

    case "REMOVE_ITEM": {
      const key = `${action.productId}-${action.size ?? ""}`;
      return {
        ...state,
        items: state.items.filter(
          (item) => `${item.product.id}-${item.size ?? ""}` !== key
        ),
      };
    }

    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        const key = `${action.productId}-${action.size ?? ""}`;
        return {
          ...state,
          items: state.items.filter(
            (item) => `${item.product.id}-${item.size ?? ""}` !== key
          ),
        };
      }

      const key = `${action.productId}-${action.size ?? ""}`;
      return {
        ...state,
        items: state.items.map((item) =>
          `${item.product.id}-${item.size ?? ""}` === key
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };

    case "OPEN_CART":
      return { ...state, isOpen: true };

    case "CLOSE_CART":
      return { ...state, isOpen: false };

    case "LOAD_CART":
      return { ...state, items: action.items };

    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addItem: (product: Product, size?: string) => void;
  removeItem: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const items: CartItem[] = JSON.parse(stored);
        dispatch({ type: "LOAD_CART", items });
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // Ignore storage errors
    }
  }, [state.items]);

  const addItem = (product: Product, size?: string) =>
    dispatch({ type: "ADD_ITEM", product, size });

  const removeItem = (productId: string, size?: string) =>
    dispatch({ type: "REMOVE_ITEM", productId, size });

  const updateQuantity = (productId: string, quantity: number, size?: string) =>
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity, size });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const toggleCart = () => dispatch({ type: "TOGGLE_CART" });
  const openCart = () => dispatch({ type: "OPEN_CART" });
  const closeCart = () => dispatch({ type: "CLOSE_CART" });

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
