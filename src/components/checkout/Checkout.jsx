// import { Link } from "react-router-dom";

export function Checkout(
  handleSubmit,
  handleAddressChange,
  handleFileChange,
  previewSrc
) {
  return (
    <>
      <div className="container mx-auto mt-10 flex justify-center items-center">
        <div className="w-3/4 bg-white shadow-xl my-10 flex-wrap">
          <div className="container mx-auto mt-44 p-8">
            <h2 className="text-4xl font-semibold mb-6">Checkout</h2>
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Shipping Information
                </h3>
                <div className="mb-4">
                  <label htmlFor="Address">Address :</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleAddressChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Payment Information
                </h3>
                <div className="mb-6">
                  <div>
                    <label>Payment proof picture:</label>
                    <div></div>
                    <input type="file" onChange={handleFileChange} required />
                    {previewSrc && <img src={previewSrc} alt="post" />}{" "}
                    {/* Display image preview */}
                  </div>
                </div>
                <CreateButton>Upload payment proof</CreateButton>
              </div>

              {/* <div className="flex justify-end">
                <Link
                  to="/"
                  onClick={() => handleSubmit()}
                  type="submit"
                  className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Place Order
                </Link>
              </div> */}

              <button
                type="submit"
                className=" bg-orange2 hover:bg-orange px-10 py-2 rounded-md text-lg text-black font-bold uppercase"
              >
                Place order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function CreateButton({ children }) {
  return (
    <button className="bg-teal hover:bg-teal text-white rounded-md text-sm font-semibold py-2 px-3 uppercase">
      {children}
    </button>
  );
}
