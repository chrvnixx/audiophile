import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const cartStore = localStorage.getItem("cartstore");
export function CartProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(cartStore) || []);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    localStorage.setItem("cartstore", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: quantity }];
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
