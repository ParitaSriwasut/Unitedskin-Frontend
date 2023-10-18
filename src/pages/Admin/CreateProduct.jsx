import { useRef, useState } from "react";
import Loading from "../../components/Loading";
import CreateProductForm from "../Admin/CreateProductForm";

export default function CreateProduct({ onSubmit, onSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);

  const [input, setInput] = useState({
    productName: "",
    shotDescription: "",
    productDescription: "",
    guide: "",
    productPrice: "",
    categoryName: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handelSubmitForm = async (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function" && typeof onSuccess === "function") {
      try {
        const formData = new FormData();
        if (file) {
          formData.append("image", file);
        }
        setLoading(true);
        await onSubmit(formData);
        onSuccess();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("onSubmit or onSuccess is not a function");
    }
  };

  return (
    <>
      {loading && <Loading />}
      <section className="bg-green">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-4xl font-semibold justify-items-center text-white dark:text-white">
            Add a new product by Admin
          </h2>
          <form action="#" onSubmit={handelSubmitForm}>
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-md font-medium text-white dark:text-white">
                  Product Name
                </label>
                <div>
                  <CreateProductForm
                    placeholder="Product Name..."
                    value={input.productName}
                    onChange={handleChangeInput}
                    name="productName"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block mb-2 text-md font-medium text-white dark:text-white">
                  Shot Description
                </label>
                <div>
                  <CreateProductForm
                    placeholder="Shot Description..."
                    value={input.shotDescription}
                    onChange={handleChangeInput}
                    name="shotDescription"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-md font-medium text-white dark:text-white"
                >
                  Product Description
                </label>
                <div>
                  <CreateProductForm
                    placeholder="Shot Description..."
                    value={input.productDescription}
                    onChange={handleChangeInput}
                    name="productDescription"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-md font-medium text-white dark:text-white"
                >
                  Guide
                </label>
                <div>
                  <CreateProductForm
                    placeholder="Shot Description..."
                    value={input.guide}
                    onChange={handleChangeInput}
                    name="guide"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block mb-2 text-md font-medium text-white dark:text-white">
                  Product Price
                </label>
                <div>
                  <CreateProductForm
                    placeholder="Shot Description..."
                    value={input.productPrice}
                    onChange={handleChangeInput}
                    name="productPrice"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-md font-medium text-white dark:text-white">
                  Category Name
                </label>
                <div>
                  <CreateProductForm
                    placeholder="Women Men Kids Unisex..."
                    value={input.categoryName}
                    onChange={handleChangeInput}
                    name="categoryName"
                  />
                </div>
              </div>
              {file ? (
                <div
                  onClick={() => fileEl.current.click()}
                  className="cursor-pointer max-h-52 overflow-hidden"
                >
                  <img src={URL.createObjectURL(file)} alt="post" />
                </div>
              ) : (
                <SelectImageButton onClick={() => fileEl.current.click()} />
              )}
              <input
                type="file"
                className="hidden"
                ref={fileEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
              />
              <CreateButton>Upload product</CreateButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function CreateButton({ children }) {
  return (
    <button className="bg-orange2 text-black rounded-lg text-xl font-semibold py-2 px-20">
      {children}
    </button>
  );
}

function SelectImageButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer gap-2"
    >
      <div className="text-xl font-semibold">Add photo</div>
    </div>
  );
}
