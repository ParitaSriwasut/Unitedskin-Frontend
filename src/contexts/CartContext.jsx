import React, { createContext, useState, useContext } from "react";
import axios from "../configs/axios";

// Create a CartContext
const CartContext = createContext();

// Create a CartProvider component that will wrap your app
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    async function callAPI() {
      const response = await axios.post("/cart/add-to-cart", {
        productId: product.id,
      });
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;
      setCart({
        items: data.items,
        total: data.total,
      });
    }

    callAPI();
  };

  const getCart = () => {
    async function fetchItems() {
      const response = await axios.get("/cart");
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }
      const data = response.data;
      setCart({
        items: data.items,
        total: data.total,
      });
    }

    fetchItems();
  };

  const deleteFromCart = (product) => {
    async function callAPI() {
      const response = await axios.post("/cart/delete-from-cart", {
        productId: product.id,
      });
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;
      setCart({
        items: data.items,
        total: data.total,
      });
    }

    callAPI();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook to use the CartContext
export function useCart() {
  return useContext(CartContext);
}
