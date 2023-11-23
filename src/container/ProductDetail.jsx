import { useState, useEffect } from "react";
import axios from "../configs/axios";
import ProductDetail from "../components/Product/ProductDetail";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

export function ProductDetailContainer() {
  const { id } = useParams();

  let navigate = useNavigate();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cart, addToCart } = useCart();
  const { authUser, getUser } = useAuth();

  if (!authUser) {
    getUser();
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get("/product/" + id); // product/2
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;
      setLoading(false);
      setProduct(data.product);
    }

    fetchProduct();
  }, [id]);

  const adminDeleteHandler = async () => {
    const response = await axios.delete("/product/" + id);
    if (!response.status === 200) {
      throw new Error("Network response was not 200");
    }

    const deleted = response.data.deleted;
    const reason = response.data.reason;

    if (deleted) {
      alert("Delete product successfully!");
      // window.location.replace("/products");
      navigate("/products");
    } else {
      alert("Delete product failed! " + reason);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return ProductDetail({
    product,
    addToCart,
    isAdminUser: authUser.isAdmin,
    adminDeleteHandler,
  });
}
