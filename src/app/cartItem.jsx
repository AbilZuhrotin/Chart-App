"use client";

import Counter from "./counter";

export default function cartItem({ product, setItemProduk }) {
  return (
    <div className="flex flex-row flex-wrap m-8 p-6 md:p-16 items-center justify-between border rounded-sm gap-6">
      <div className="flex flex-row gap-4 md:gap-12 w-36 items-center">
        <input type="checkbox" className="" />
        <img src={product.image} className="h-24 md:h-36 object-contain" />
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <h3 className="w-full md:w-120">{product.title}</h3>
        <p className="font-semibold text-yellow-300">{product.price}</p>
      <Counter />
      </div>
      <p className="w-fit md:w-10 text-red-500 font-bold">{product.price}</p>
    </div>
  );
}
