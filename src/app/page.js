'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import CartList from "./cartList";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    getDataProducts();
  }, []);

  const getDataProducts = async () => {
    const { data } = await axios("https://fakestoreapi.com/products?limit=5");
    setProducts(data);
  };

  const updateCartQuantity = (productId, newQty) => {
    setCart((prev) => ({
      ...prev,
      [productId]: Math.max(newQty, 0), // biar nggak minus
    }));
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <Navbar />
      <CartList products={products} cart={cart} updateCartQuantity={updateCartQuantity} />
    </div>
  );
}
