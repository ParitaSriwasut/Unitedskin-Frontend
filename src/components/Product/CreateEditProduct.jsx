import HomeNavbar from "../navbar/HomeNavbar";

export default function CreateEditProduct({
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
}) {
  return (
    <section className="bg-lime">
      <HomeNavbar />
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-4xl font-semibold justify-items-center text-white dark:text-white">
          Add a new product by Admin
        </h2>
        <form onSubmit={handleSubmitForm}>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-md font-medium text-white dark:text-white">
                Product Name
              </label>
              <div>
                <CreateProductForm
                  placeholder="Product Name..."
                  onChange={handleProductNameChange}
                  value={productName}
                  name="productName"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-md font-medium text-white dark:text-white">
                Short Description
              </label>
              <div>
                <CreateProductForm
                  placeholder="Short Description..."
                  onChange={handleProductShortDescriptionChange}
                  value={productShortDescription}
                  name="shotDescription"
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
                  placeholder="Guide..."
                  onChange={handleProductGuideChange}
                  value={productGuide}
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
                  placeholder="Product Price..."
                  onChange={handleProductPriceChange}
                  value={productPrice}
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
                  onChange={handleProductCategoryNameChange}
                  value={productCategoryName}
                  name="categoryName"
                />
              </div>
            </div>

            <div>
              <label>Picture :</label>
              <input type="file" onChange={handleFileChange} required />
              {previewSrc && <img src={previewSrc} alt="post" />}{" "}
              {/* Display image preview */}
            </div>
            <CreateButton>Upload product</CreateButton>
          </div>
        </form>
      </div>
    </section>
  );
}

function CreateButton({ children }) {
  return (
    <button className="bg-orange2 text-black rounded-lg text-xl font-semibold py-2 px-20">
      {children}
    </button>
  );
}

function CreateProductForm({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-5 py-4 mt-1 break-all bg-gray border border-black text-black text-md rounded-lg focus:ring-neutral2 focus:border-neutral2 block w-full p-2.5 dark:bg-white dark:border-gray dark:placeholder-stone dark:text-black dark:focus:ring-neutral2 dark:focus:border-neutral2"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
