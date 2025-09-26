'use client'
import { Gift } from "lucide-react"
import {ShoppingBasket} from "lucide-react"

export default function Navbar() {
    return(
      <nav className="w-full h-24 flex justify-around items-center bg-[#FFB22C]">
        <div className="flex gap-4">
          <Gift className="text-[#F7F7F7] size-7"/>
          <h1 className="text-[#F7F7F7] font-bold text-xl">GoldenGift</h1>
        </div>
        <ShoppingBasket className="text-[#F7F7F7] size-7"/>
      </nav>
    )
}

