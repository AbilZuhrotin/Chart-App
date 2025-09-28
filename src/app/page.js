'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import CartList from "./cartList";

export default function Home() {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    getDataProducts();
  }, []);

  const getDataProducts = async () => {
    try{
      const { data } = await axios("https://fakestoreapi.com/products?limit=5");
      setProducts(data);
    } catch (error){
      console.error("Gagal mengambil data produk:", error);
    }
  };

  
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <CartList products={products} />
    </div>
  );
}
