import { createContext, useState, useContext } from "react";
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

  const deleteFromCart = (productId) => {
    async function callAPI() {
      const response = await axios.post("/cart/delete-to-cart", {
        productId,
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

  const handleInc = (productId) => {
    async function callAPI() {
      const response = await axios.post("/cart/add-to-cart", {
        productId,
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

  const handleDec = (productId) => {
    async function callAPI() {
      const response = await axios.post("/cart/remove-from-cart", {
        productId,
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
  const increaseDecreaseProduct = async (productId, action) => {
    try {
      if (action === "increase") {
        handleInc(productId);
      } else if (action === "decrease") {
        handleDec(productId);
      }

      getCart();
    } catch (error) {
      console.error("Error increasing/decreasing product:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        getCart,
        handleInc,
        handleDec,
        increaseDecreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook to use the CartContext
export function useCart() {
  return useContext(CartContext);
}
