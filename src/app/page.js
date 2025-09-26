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


"use cilent"
import Navbar from "./navbar";

export default function Home(){
  return(
    <>
      <Navbar />
    </>
  )
}