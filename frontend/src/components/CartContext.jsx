import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const cartStore = localStorage.getItem("cartstore");
export function CartProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(cartStore) || []);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState("");

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
    setQuantity(1);
  }

  function decreaseQuantity(id) {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }

  function increaseQuantity(id) {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  function removeAll() {
    setCart([]);
  }

  useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => {
      return sum + Number(item.price) * item.quantity;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        quantity,
        setQuantity,
        decreaseQuantity,
        increaseQuantity,
        total,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
