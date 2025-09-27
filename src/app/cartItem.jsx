'use client'
import { Star } from "lucide-react";
import Counter from "./counter";

export default function CartItem({ product, qty, updateCartQuantity }) {
  return (
    <div className="m-5 text-black">
      <div className="flex flex-row flex-wrap p-6 items-center justify-between gap-6">
        <div className="flex flex-row">
          <div className="flex flex-row gap-4 md:gap-12 w-36 items-center">
            <img src={product.image} className="h-24 md:h-36 object-contain" />
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="w-full md:w-120">{product.title}</h3>
            <p className="bg-[#854836] text-white px-2 py-1 w-fit">
              {product.category}
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star className="text-[#FFB22C]" />
              <p>{product.rating.rate}</p>
              <p>({product.rating.count})</p>
            </div>
            <p className="font-semibold">${product.price}</p>
          </div>
        </div>
        <Counter productId={product.id} qty={qty} updateCartQuantity={updateCartQuantity} />
        <p className="w-fit md:w-10 font-bold text-[#FFB22C]">
          {(product.price * qty).toFixed(2)}
        </p>
      </div>
      <hr className="text-[#706C61]"></hr>
    </div>
  );
}
