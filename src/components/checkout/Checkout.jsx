import { Link } from "react-router-dom";

export function Checkout(
  handleSubmit,
  handleAddressChange,
  handleFileChange,
  previewSrc
) {
  return (
    <div className="mt-20 bg-gray-200">
      <h1 className="text-2xl font-semibold mb-6 mx-24">Checkout</h1>
      <div className="container mx-auto mt-10 p-4">
        <div className="md:w-12/12">
          <section className="bg-white rounded-lg my-4">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Shipping Information
                </h3>
                <div className="mb-4 gap-6">
                  <label htmlFor="Address">Address : </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleAddressChange}
                    className="w-[600px] p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4 gap-6">
                  <label htmlFor="Address">Address : </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleAddressChange}
                    className="w-[600px] p-2 border rounded"
                    required
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="flex justify-start items-start mb-8">
                <label>Payment Proof : </label>
                <input type="file" onChange={handleFileChange} required />
                {previewSrc && <img src={previewSrc} alt="post" />}{" "}
                {/* Display image preview */}
              </div>

              <div className="flex justify-end">
                <Link
                  to="/"
                  onClick={() => handleSubmit()}
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Place Order
                </Link>
              </div>
              <div className="flex items-start justify-start py-10 container">
                <button
                  type="submit"
                  className="bg-orange2 hover:bg-teal px-4 py-3 text-md font-semibold text-white uppercase"
                >
                  Order now
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
