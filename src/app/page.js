// 'use client'

// import { useState } from "react";
// import Image from "next/image";
// import Navbar from "./navbar";
// import CartList from "./cartList";

// export default function Home() {
//   const [itemproduk, setItemProduk] = useState([])

//   return (
//     <div className="bg-black">
//       <Navbar itemproduk={itemproduk} />
//       <CartList setItemProduk={setItemProduk} />
//     </div>
//   );
// }


"use client"
import { useState, useEffect } from "react";
import axios from "axios"
import Navbar from "./navbar";
import CartList from "./cartList";

export default function Home(){
  const [products, setProducts] = useState([])

useEffect(()=>{
  getDataProducts();
}, [])

const getDataProducts = async() =>{
  const {data} = await axios ("https://fakestoreapi.com/products?limit=5");
  setProducts(data);
}

console.log(products)

  return(
    <div className="bg-[#F7F7F7] min-h-screen">
      <Navbar />
      <CartList products={products} />
    </div>
  )
}