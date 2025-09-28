'use client'
import { useCartStore } from './cartStore';

export default function Counter({ productId }) {
  const qty = useCartStore((state) => state.cart[productId] || 0);
  const { increment, decrement } = useCartStore();

  return (
    <div className="flex flex-row items-center gap-32">
      <div className="w-20 pt-0.5 pb-0.5 pr-2.5 pl-2.5 flex justify-between border-1 border-[#706C61]">
         <button onClick={() => decrement(productId)}>-</button>
        <span>{qty}</span>
        <button onClick={() => increment(productId)}>+</button>
      </div>
    </div>
  );
}
