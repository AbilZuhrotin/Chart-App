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

"use client"
const testCard = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  }
]

export default function cartItem(){
  return(
    <div>
      <img/>
      <div>
        
      </div>
    </div>
  )
}