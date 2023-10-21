export default function ProductDetail({ product, addToCart }) {
  return (
    <>
      <div className="mt-20 bg-gray-200">
        <div className="container mx-auto p-4">
          <div className="md:w-12/12">
            <section className="bg-white rounded-lg shadow-md">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12">
                  <div className="pro-img-details">
                    <img src={product.image} alt={product.productName} />
                  </div>
                </div>
                <div className="w-full md:w-6/12 p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.productName}
                  </h2>
                  <p className="text-md font-semibold text-gray-800 mb-2 leading-loose">
                    {product.shortDescription}
                  </p>
                  <p className="text-gray-600 text-md mb-2 leading-loose">
                    {product.guide}
                  </p>
                  <div className="mt-4 text-gray-600">
                    <strong>Category: {product.categoryName}</strong>
                  </div>
                  <div className="mt-4">
                    <strong>Price: ${product.productPrice}</strong>
                  </div>
                  <div className="mt-4">
                    <button
                      className="bg-green text-white py-2 px-6 rounded-full"
                      onClick={() => addToCart(product)}
                    >
                      <i
                        className="far fa-shopping-cart"
                        style={{ color: "#78716c" }}
                      ></i>{" "}
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
