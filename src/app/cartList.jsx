'use client'
import CartItem from "./cartItem";
import { useCartStore } from "./cartStore";

export default function CartList({ products }) { 
  return (
    <div>
      {products.length == 0 ? (
        <span className="text-white">Loading...</span>
      ) : (
        products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
          />
        ))
      )}
    </div>
  );
}
