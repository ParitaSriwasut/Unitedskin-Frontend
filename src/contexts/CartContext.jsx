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

  // const handleInc = (product) => {
  //   async function callAPI()
  //   {
  
  //     const updatedCart = carts.map(item => {
  //       if(item.id === id){
  //         return{
  //           ...item,
  //           quantity: item.quantity + 1
  //         }
  //       }
  //       return item
  //     })
  //     localStorage.setItem('cart', JSON.stringify(updatedCart))
  //     navigate('/cart')
  // }
  // }

  // const handleDec = (id ) => {
  //   const updatedCart = carts.map(item => {
  //     if(item.id === id){
  //       const newQuantity = Math.max(1, item.quantity - 1);
  //       return{
  //         ...item,
  //         quantity: newQuantity
  //       }
  //     }
  //     return item
  //   })
  //   localStorage.setItem('cart', JSON.stringify(updatedCart))
  //   navigate('/cart')
  // }

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
