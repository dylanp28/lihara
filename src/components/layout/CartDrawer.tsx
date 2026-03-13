"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { formatPrice } from "@/lib/utils";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";
import { ProductPlaceholder } from "@/components/product/ProductPlaceholder";

export function CartDrawer() {
  const { state, closeCart, removeItem, updateQuantity, itemCount, subtotal } = useCart();

  const shippingMessage =
    subtotal >= FREE_SHIPPING_THRESHOLD
      ? "You qualify for free shipping"
      : `${formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} away from free shipping`;

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-14">
              <h2 className="font-display text-xl">Cart ({itemCount})</h2>
              <button onClick={closeCart} className="text-charcoal/40 hover:text-charcoal transition-colors" aria-label="Close cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {state.items.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-charcoal/35 mb-8 font-light">Your cart is empty</p>
                  <Link
                    href="/products"
                    onClick={closeCart}
                    className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50 hover:text-charcoal transition-colors"
                  >
                    Continue shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {state.items.map((item) => {
                    const key = `${item.product.id}-${item.size ?? ""}`;
                    return (
                      <div key={key} className="flex gap-4">
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                          <ProductPlaceholder
                            gradient={item.product.images[0].gradient}
                            category={item.product.category}
                            size="sm"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm truncate">{item.product.name}</h3>
                          {item.size && (
                            <p className="text-xs text-charcoal/35 mt-0.5">Size: {item.size}</p>
                          )}
                          <p className="text-sm text-charcoal/60 mt-1">{formatPrice(item.product.price)}</p>
                          <div className="flex items-center justify-between mt-2">
                            <QuantitySelector
                              quantity={item.quantity}
                              onIncrease={() =>
                                updateQuantity(item.product.id, item.quantity + 1, item.size)
                              }
                              onDecrease={() =>
                                updateQuantity(item.product.id, item.quantity - 1, item.size)
                              }
                            />
                            <button
                              onClick={() => removeItem(item.product.id, item.size)}
                              className="text-[10px] uppercase tracking-wider text-charcoal/30 hover:text-charcoal transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {state.items.length > 0 && (
              <div className="px-6 py-6 space-y-4">
                <p className="text-[10px] text-center text-charcoal/30 uppercase tracking-wider">{shippingMessage}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/50">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block w-full text-center bg-charcoal text-cream py-3.5 text-[11px] uppercase tracking-[0.15em] hover:bg-charcoal/85 transition-colors duration-300"
                >
                  View Cart
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
