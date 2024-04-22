import { useState } from "react";
import axios from "../configs/axios";
import { Checkout } from "../components/checkout/Checkout";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export function CheckoutContainer() {
  const { cart, getCart } = useCart();
  const navigate = useNavigate();

  if (!cart.items) {
    getCart();
  }

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);

    // Image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phoneNumber,
      address,
      file: file,
    };

    if (!cart.items || cart.items.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await axios.post("/orders", formData, headers);
      if (!response.status === 201) {
        throw new Error("Network response was not 200");
      }

      navigate("/orders/payment/" + response.data.paymentId);
    } catch (err) {
      console.error(err);
      alert("Failed to create order");
    }

    // refresh the cart.
    getCart();
  };

  return Checkout({
    handleSubmit,
    handleNameChange,
    handlePhoneNumberChange,
    handleAddressChange,
    handleFileChange,
    previewSrc
});
}
