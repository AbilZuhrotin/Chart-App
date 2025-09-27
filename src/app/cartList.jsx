'use client'
import CartItem from "./cartItem";

export default function CartList({ products, cart, updateCartQuantity }) {
  return (
    <div>
      {products.length == 0 ? (
        <span className="text-white">Loading...</span>
      ) : (
        products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            qty={cart[product.id] || 0}
            updateCartQuantity={updateCartQuantity}
          />
        ))
      )}
    </div>
  );
}
