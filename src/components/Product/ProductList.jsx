import { Link } from "react-router-dom";

export default function ProductList({ products, isAdminUser = false }) {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="flex justify-center text-stone text-4xl font-semibold py-10">
            Products
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div>
                <Link to={`/products/${product.id}`} key={product.id}>
                  <a key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.image}
                        alt={product.productName}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.productName}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ${product.productPrice}
                    </p>
                  </a>
                </Link>
                {isAdminUser && (
                  <div className="mt-4">
                    <Link to={`/admin/product/${product.id}`}>
                      <button className="bg-green text-white py-2 px-6 rounded-full">
                        <i style={{ color: "#78716c" }}></i> Edit
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
