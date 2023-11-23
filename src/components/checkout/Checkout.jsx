import { Link } from "react-router-dom";

export function Checkout(
  handleSubmit,
  handleAddressChange,
  handleFileChange,
  previewSrc
) {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Shipping Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          <div className="mb-4">
            <label htmlFor="Address">Address</label>
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
        <div>
          <label>Picture:</label>
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

        <button
          type="submit"
          className="bg-teal hover:bg-red-600 px-3 py-1 text-sm text-white uppercase"
        >
          Order
        </button>
      </form>
    </div>
  );
}
