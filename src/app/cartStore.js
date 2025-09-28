import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: {}, 
  increment: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        [productId]: (state.cart[productId] || 0) + 1,
      },
    })),

  decrement: (productId) =>
    set((state) => {
      const currentQty = state.cart[productId] || 0;
      if (currentQty <= 0) return {}; 

      return {
        cart: {
          ...state.cart,
          [productId]: currentQty - 1,
        },
      };
    }),
}));