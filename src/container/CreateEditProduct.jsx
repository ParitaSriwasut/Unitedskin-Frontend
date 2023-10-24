import { useState, useEffect } from "react";
import axios from "../configs/axios";
import CreateEditProduct from "../components/Product/CreateEditProduct";
import { useParams } from "react-router-dom";

export function CreateEditProductContainer() {
  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [productShortDescription, setProductShortDescription] = useState("");
  const [productGuide, setProductGuide] = useState("");
  const [productCategoryName, setProductCategoryName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };
  const handleProductShortDescriptionChange = (e) => {
    setProductShortDescription(e.target.value);
  };
  const handleProductGuideChange = (e) => {
    setProductGuide(e.target.value);
  };
  const handleProductCategoryNameChange = (e) => {
    setProductCategoryName(e.target.value);
  };
  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
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

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("file", file);
    formData.append("shortDescription", productShortDescription);
    formData.append("guide", productGuide);
    formData.append("categoryName", productCategoryName);
    formData.append("productPrice", productPrice);

    try {
      const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let response;
      if (id) {
        response = await axios.put("/product/" + id, formData, headers);
      } else {
        response = await axios.post("/product", formData, headers);
      }

      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }
      alert("Product uploaded successfully!");

      if (!id) {
        window.location.replace("/admin/product/" + response.body.product.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get("/product/" + id); // product/2
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;

      setProductName(data.product.productName);
      setProductShortDescription(data.product.shortDescription);
      setProductGuide(data.product.guide);
      setProductCategoryName(data.product.categoryName);
      setProductPrice(data.product.productPrice);
      setPreviewSrc(data.product.image);
    }

    fetchProduct();
  }, [id]);

  return CreateEditProduct({
    handleProductNameChange,
    handleProductShortDescriptionChange,
    handleProductGuideChange,
    handleProductPriceChange,
    handleProductCategoryNameChange,
    handleFileChange,
    handleSubmitForm,

    productName,
    productShortDescription,
    productGuide,
    productCategoryName,
    productPrice,
    previewSrc,
  });
}
