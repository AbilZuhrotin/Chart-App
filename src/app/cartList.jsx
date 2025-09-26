// 'use client'
// import { useEffect, useState } from "react"
// import axios from "axios"
// import CartItem from "./cartItem"

// export default function CartList({setItemProduk}){
//     const [product, setProduct] = useState ([])

//     useEffect(()=>{
//         getDataProduct()
//     }, [])

//     const getDataProduct = async () =>{
//         const {data} = await axios("https://fakestoreapi.com/products?limit=5");
//         setProduct(data);
//     }

//     return (
//         <>
//         {product.length == 0?(
//             <span className="text-center">Loading Page</span>
//         ):(
//             product.map((item) =>(
//                 <CartItem
//                 key={item.id}
//                 product={item}
//                 setItemProduk={setItemProduk} />
//             ))
//         )}
//         </>
//     )
// }

"use client";
import CartItem from "./cartItem";

export default function CartList({products}) {
  return (
    <div>
      {products.length == 0 ? (
        <span>Loding</span>
      ) : (
        products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
