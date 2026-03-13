"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { CartSummary } from "@/components/cart/CartSummary";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const { state, clearCart } = useCart();

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Cart" }]} />

        <h1 className="font-display text-3xl sm:text-4xl font-light tracking-tight mb-10">
          Your Cart
        </h1>

        {state.items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-charcoal/50 text-lg mb-8">Your cart is empty.</p>
            <Button variant="outline" href="/products">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {state.items.map((item) => (
                <CartItemRow
                  key={`${item.product.id}-${item.size ?? ""}`}
                  item={item}
                />
              ))}
              <div className="flex items-center justify-between mt-6">
                <Link
                  href="/products"
                  className="text-sm text-charcoal/60 hover:text-charcoal underline underline-offset-4"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-sm text-charcoal/40 hover:text-charcoal underline underline-offset-4"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
