'use client'

export default function Counter({ productId, qty, updateCartQuantity }) {
  const increment = () => updateCartQuantity(productId, qty +1)
  const decrement = () => updateCartQuantity(productId, qty -1)

  return (
    <div className="flex flex-row items-center gap-32">
      <div className="w-20 pt-0.5 pb-0.5 pr-2.5 pl-2.5 flex justify-between border-1 border-[#706C61]">
        <button onClick={decrement}>-</button>
        <span>{qty}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
