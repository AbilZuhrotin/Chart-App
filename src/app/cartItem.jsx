// "use client";

// import Counter from "./counter";

// export default function cartItem({ product, setItemProduk }) {
//   return (
//     <div className="flex flex-row flex-wrap m-8 p-6 md:p-16 items-center justify-between border rounded-sm gap-6">
//       <div className="flex flex-row gap-4 md:gap-12 w-36 items-center">
//         <input type="checkbox" className="" />
//         <img src={product.image} className="h-24 md:h-36 object-contain" />
//       </div>
//       <div className="flex flex-col gap-2 md:gap-4">
//         <h3 className="w-full md:w-120">{product.title}</h3>
//         <p className="font-semibold text-yellow-300">{product.price}</p>
//       <Counter />
//       </div>
//       <p className="w-fit md:w-10 text-red-500 font-bold">{product.price}</p>
//     </div>
//   );
// }

"use client";
import { Star } from "lucide-react";
import Counter from "./counter";

export default function CartItem({product}) {
  return (
    <div className="m-5 ">
      <div className="flex flex-row items-center justify-between p-7 text-[#333333]">
        <div className="flex flex-row">
          <div className="flex flex-row">
            <img src={product.image} className="w-32 h-32 object-contain" />
            <div className="flex flex-col gap-2 ">
              <div>
                <p className="">{product.title}</p>
                <p className="bg-[#854836] text-white px-2 py-1 inline-block">{product.category}</p>
              </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star className="text-[#FFB22C]"/>
              <p>{product.rating.rate}</p>
              <p>({product.rating.count})</p>
            </div>
            <p>{product.price}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 gap-12">
          <Counter />
          <p className="font-bold text-[#FFB22C]">{product.price}</p>
        </div>
      </div>
      <hr className="text-[#706C61]"></hr>
    </div>
  );
}
