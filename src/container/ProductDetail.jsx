import { useState, useEffect } from "react";
import axios from "../configs/axios";
import ProductDetail from "../components/Product/ProductDetail";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export function ProductDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get("/product/" + id); // product/2
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      console.log(`response: ${JSON.stringify(response)}`);
      const data = response.data;
      setLoading(false);
      setProduct(data.product);
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return Loading();
  }

  return ProductDetail({ product });
}
