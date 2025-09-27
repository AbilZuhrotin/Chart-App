'use client'
import { Gift } from "lucide-react"
import {ShoppingBasket} from "lucide-react"

export default function Navbar({totalItems}) {
    return(
      <nav className="w-full h-24 flex justify-around items-center bg-[#FFB22C]">
        <div className="flex gap-4">
          <Gift className="text-[#F7F7F7] size-7"/>
          <h1 className="text-[#F7F7F7] font-bold text-xl">GoldenGift</h1>
        </div>
        <p className="flex items-center relative">
        <ShoppingBasket className="text-[#F7F7F7] size-7"/>
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-white rounded-full">{totalItems}</span>
        </p>
      </nav>
    )
}

