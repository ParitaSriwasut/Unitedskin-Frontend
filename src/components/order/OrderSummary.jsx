export default function OrderSummary({ payment }) {
  return (
    <div className="container mx-auto mt-10">
      <div className="w-3/4 shadow-md my-10">
        <div className="bg-white px-10 py-1">
          <div className="border-b pb-8">
            <h1 className="font-semibold text-2xl">Order Summary</h1>
          </div>

          {payment.order.length === 0 ? (
            <p className="text-center py-10">No order items found.</p>
          ) : (
            <div className="mt-10">
              {payment.order.map((order, index) => (
                <div
                  className="flex flex-col md:flex-row justify-between items-center border-b py-5"
                  key={index}
                >
                  <div className="w-full md:w-1/5 mb-4 md:mb-0 mr-4 md:mr-6">
                    <img
                      src={order.product.image}
                      alt={order.product.productName}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-full md:w-4/5">
                    <p className="font-bold text-sm">
                      Product: {order.product.productName}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Price: ${Number(order.product.productPrice).toFixed(2)}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Quantity: {order.quantity}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Total: ${Number(order.totalAmount).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 bg-gray-100 p-5">
            <h2 className="font-semibold text-xl mb-2">Payment Information</h2>
            <p className="text-sm">Payment ID: {payment.id}</p>
            <p className="text-sm">
              Sum Amount: ${Number(payment.sumAmount).toFixed(2)}
            </p>
            <img
              src={payment.paymentQRCode}
              alt="Payment QR Code"
              className="w-32 h-32 mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
