export default function AdminOrderSummaries({
  payments,
  filterStatus,
  handleStatusChange,
  handleFilterChange,
  totalOrders,
  totalRevenue,
}) {
  return (
    <div className="container mx-auto mt-10">
      <div className="w-full shadow-md my-10">
        <div className="bg-white px-10 py-1">
          <h1 className="font-semibold text-2xl mb-8">
            Admin Order Management
          </h1>

          <div className="mb-8">
            <label htmlFor="filter-status" className="mr-2">
              Filter by Status:
            </label>
            <select
              id="filter-status"
              value={filterStatus}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            >
              <option value="all">All</option>
              <option value="placed">Placed</option>
              <option value="accepted">Accepted</option>
              <option value="shipped">Shipped</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Display total number of orders and total revenue based on filter */}
          <div className="mb-8">
            <p className="text-lg">
              <strong>Total Orders:</strong> {totalOrders}
            </p>
            <p className="text-lg">
              <strong>Total Revenue:</strong> ${totalRevenue.toFixed(2)}
            </p>
          </div>

          {payments.length === 0 ? (
            <p className="text-center py-10">No orders found.</p>
          ) : (
            payments.map((payment, index) => (
              <div className="border-b pb-8 mb-8" key={index}>
                {/* User Information */}
                <div className="mb-4">
                  <h2 className="font-semibold text-lg">User Information</h2>
                  <p>Name: {payment.user.name}</p>
                  <p>Email: {payment.user.email}</p>
                  <p>Mobile: {payment.user.mobile}</p>
                </div>

                {/* Shipping Information */}
                <div className="mb-4">
                  <h2 className="font-semibold text-lg">
                    Shipping Information
                  </h2>
                  <p>Address: {payment.address}</p>
                </div>

                {/* Order Summary */}
                <h2 className="font-semibold text-lg">Order Summary</h2>
                {payment.order.map((order, orderIndex) => (
                  <div
                    className="flex flex-col md:flex-row justify-between items-center py-5"
                    key={orderIndex}
                  >
                    <div className="w-20 mb-4 md:mb-0 mr-4 md:mr-6">
                      <img
                        src={order.product.image}
                        alt={order.product.productName}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-full md:w-4/5">
                      <p className="font-bold text-sm">Order Id: {order.id}</p>
                      <p className="font-bold text-sm">
                        Product: {order.product.productName}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Price: {order.product.productPrice}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Quantity: {order.quantity}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Total: ${Number(order.totalAmount).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex justify-end mt-4">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order.id, e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="placed">Placed</option>
                        <option value="accepted">Accepted</option>
                        <option value="shipped">Shipped</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                ))}

                <div className="mt-10 bg-gray-100 p-5">
                  <h2 className="font-semibold text-xl mb-2">
                    Payment Information
                  </h2>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
