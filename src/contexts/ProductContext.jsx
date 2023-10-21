import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const productList = async (categoryName) => {
    const res = await axios.get("/category:name");
    const product = res.data.post;
    setProducts([product, ...products]);
  };

  const productDetails = async (productId) => {
    const res = await axios.get("/product/:id");
    const detail = res.data.post;
    setDetails([detail, ...details]);
  };

  return (
    <ProductContext.Provider value={{ products, productList, productDetails }}>
      {children}
    </ProductContext.Provider>
  );
}
