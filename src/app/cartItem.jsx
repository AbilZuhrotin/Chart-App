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

const testCard = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

export default function cartItem() {
  return (
    <div className="m-5 ">
      <div className="flex flex-row items-center justify-between p-7 text-[#333333]">
        <div className="flex flex-row">
          <div className="flex flex-row">
            <img src={testCard[0].image} className="w-32 h-32 object-contain" />
            <div className="flex flex-col gap-2 w-2xs">
              <div>
                <p className="">{testCard[0].title}</p>
                <p className="bg-[#854836] text-white px-2 py-1 inline-block">{testCard[0].category}</p>
              </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star className="text-[#FFB22C]"/>
              <p>{testCard[0].rating.rate}</p>
              <p>({testCard[0].rating.count})</p>
            </div>
            <p>{testCard[0].price}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 gap-12">
          <Counter />
          <p className="font-bold text-[#FFB22C]">{testCard[0].price}</p>
        </div>
      </div>
      <hr className="text-[#706C61]"></hr>
    </div>
  );
}
