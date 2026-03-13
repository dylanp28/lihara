"use client";

import Link from "next/link";
import { CartItem } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { ProductPlaceholder } from "@/components/product/ProductPlaceholder";

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { removeItem, updateQuantity } = useCart();
  const lineTotal = item.product.price * item.quantity;

  return (
    <div className="flex gap-6 py-6 border-b border-accent">
      {/* Image */}
      <Link href={`/products/${item.product.slug}`} className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden">
        <ProductPlaceholder
          gradient={item.product.images[0].gradient}
          category={item.product.category}
          size="sm"
          className="h-full"
        />
      </Link>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <Link
            href={`/products/${item.product.slug}`}
            className="text-sm font-medium hover:text-charcoal/60 transition-colors"
          >
            {item.product.name}
          </Link>
          {item.size && (
            <p className="text-xs text-charcoal/50 mt-1">Size: {item.size}</p>
          )}
          <p className="text-sm mt-1">{formatPrice(item.product.price)}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
            onDecrease={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
          />
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{formatPrice(lineTotal)}</span>
            <button
              onClick={() => removeItem(item.product.id, item.size)}
              className="text-xs text-charcoal/40 hover:text-charcoal underline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
