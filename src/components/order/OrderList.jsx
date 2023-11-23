import { Link } from "react-router-dom";

export default function OrderList({ orders }) {
  return (
    <div className="container mx-auto mt-10">
      <div className="w-3/4 shadow-md my-10">
        <div className="bg-white px-10 py-1">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Your Orders</h1>
          </div>
          {orders.length === 0 ? (
            <p className="text-center py-10">No orders found.</p>
          ) : (
            <div className="mt-10">
              {orders.map((order) => (
                <div
                  className="flex flex-col md:flex-row justify-between items-center border-b py-5"
                  key={order.id}
                >
                  <div className="w-full md:w-1/5 mb-4 md:mb-0 mr-4 md:mr-6">
                    <img
                      src={order.product.image}
                      alt={order.product.productName}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full md:w-3/5">
                    <p className="font-bold text-sm">
                      Product: {order.product.productName}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Quantity: {order.quantity}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Total: ${Number(order.totalAmount).toFixed(2)}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Payment ID: {order.paymentId}
                    </p>
                    <div className="mt-2">
                      <img
                        src={order.payment.paymentQRCode}
                        alt="Payment QR Code"
                        className="w-32 h-32"
                      />
                    </div>
                    <p className="text-gray-600 text-sm">
                      Order Status: {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Link
            to="/products"
            className="flex font-semibold text-gray-900 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-gray-900 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
