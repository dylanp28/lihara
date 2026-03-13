"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function CartSummary() {
  const { subtotal } = useCart();

  const freeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingEstimate = freeShipping ? 0 : 5;
  const total = subtotal + shippingEstimate;

  return (
    <div className="bg-accent/20 p-8 space-y-5">
      <h2 className="font-display text-2xl">Summary</h2>

      <div className="space-y-3 pt-2">
        <div className="flex justify-between text-sm">
          <span className="text-charcoal/45 font-light">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-charcoal/45 font-light">Shipping</span>
          <span>{freeShipping ? "Free" : formatPrice(shippingEstimate)}</span>
        </div>

        {!freeShipping && (
          <p className="text-[10px] text-charcoal/30 uppercase tracking-wider">
            {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} away from free shipping
          </p>
        )}
      </div>

      <div className="pt-4 flex justify-between text-sm font-medium">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>

      <Button variant="primary" size="lg" className="w-full" disabled>
        Checkout — Coming Soon
      </Button>

      <p className="text-[10px] text-center text-charcoal/25 tracking-wider">
        Taxes calculated at checkout
      </p>
    </div>
  );
}
