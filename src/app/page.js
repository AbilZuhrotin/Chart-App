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
import Navbar from "./navbar";
import CartItem from "./cartItem";

export default function Home(){
  return(
    <div className="bg-[#F7F7F7] min-h-screen">
      <Navbar />
      <CartItem/>
    </div>
  )
}