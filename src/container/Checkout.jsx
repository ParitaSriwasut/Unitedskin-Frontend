import { useState } from "react";
import axios from "../configs/axios";
import { Checkout } from "../components/checkout/Checkout";
import { useCart } from "../contexts/CartContext";

export function CheckoutContainer() {
  const { cart, getCart } = useCart();

  if (!cart.items) {
    getCart();
  }

  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      address,
      creditCardNumber: cardNumber,
    };

    if (!cart.items || cart.items.length === 0) {
      alert("Your cart is empty");
      return;
    }

    try {
      const response = await axios.post("/order", formData);
      if (!response.status === 201) {
        throw new Error("Network response was not 200");
      }
      alert("Order placed successfully!");
    } catch (err) {
      console.log(err);
    }

    // refresh the cart.
    getCart();
  };

  return Checkout(handleSubmit, handleAddressChange, handleCardNumberChange);
}
