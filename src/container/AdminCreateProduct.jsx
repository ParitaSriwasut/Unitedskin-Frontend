import { createContext, useContext, useEffect, useState } from "react";
import axios from "../configs/axios";

const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export function AdminContextProvider({ children }) {
  const [adminCreateProduct, setAdminCreateProduct] = useState(null); // Change to null for initial state

  const createProduct = (productData) => {
    setAdminCreateProduct({
      productName: productData.productName,
      shotDescription: productData.shotDescription,
      productDescription: productData.productDescription,
      guide: productData.guide,
      productPrice: productData.productPrice,
      categoryName: productData.categoryName,
      image: productData.image,
    });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get("/admin/get-product-data");
        if (response.status === 200) {
          const data = response.data;
          setAdminCreateProduct(data); // Update the state with fetched data
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this effect runs only on component mount

  const addToProductDetail = (product) => {
    async function callAPI() {
      const response = await axios.post("/productDetails/:id", {
        productId: product.id,
      });
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;
      setAdminCreateProduct({
        productName: data.productName,
        shotDescription: data.shotDescription,
        productDescription: data.productDescription,
        guide: data.guide,
        productPrice: data.productPrice,
        categoryName: data.categoryName,
        image: data.image,
      });
    }

    const getProduct = () => {
      async function fetchItems() {
        const response = await axios.get("/product/:id");
        if (!response.status === 200) {
          throw new Error("Network response was not 200");
        }
        const data = response.data;
        setAdminCreateProduct({
          productName: data.productName,
          shotDescription: data.shotDescription,
          productDescription: data.productDescription,
          guide: data.guide,
          productPrice: data.productPrice,
          categoryName: data.categoryName,
          image: data.image,
        });
      }
      fetchItems();
    };

    callAPI();
  };

  

  return (
    <AdminContext.Provider value={{ createProduct, adminCreateProduct }}>
      {children}
    </AdminContext.Provider>
  );
}
