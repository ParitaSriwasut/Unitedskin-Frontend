import { Link } from "react-router-dom";

export function Checkout({
  handleSubmit,
  handleNameChange,
  handlePhoneNumberChange,
  handleAddressChange,
  handleFileChange,
  previewSrc
}) {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="container shadow-xl mx-auto p-4">
        <div className="w-full">
          <div className="flex-col ml-24"> 
            <h1 className="text-4xl font-semibold mb-4">Order Checkout</h1>
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          </div>
          <section className="bg-white my-4 flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
              {/* Shipping Information */}
              <div className="mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="col-span-1">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleNameChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={handlePhoneNumberChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="address1">Address 1</label>
                    <input
                      type="text"
                      id="address1"
                      name="address1"
                      onChange={handleAddressChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="address2">Address 2</label>
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      onChange={handleAddressChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Payment Information */}
              <div className="flex justify-start items-start mb-8">
                <label>Payment Proof : </label>
                <input type="file" onChange={handleFileChange} required />
              </div>
              <div className="flex justify-start items-start mb-8">
              {previewSrc && <img src={previewSrc} alt="post" style={{ width: "350px" }} />}{" "}
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
              <div className="flex justify-start py-10">
                <button
                  type="submit"
                  className="bg-orange2 font-semibold py-3 px-36 text-sm text-white uppercase rounded-full hover:bg-orange3 hover:text-gray-800 transition duration-300 ease-in-out"
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
