import { Link } from "react-router-dom";
import myLogo from "../../assets/logo/Logo-2.png";
import { useAuth } from "../../hooks/use-auth";
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";

export default function HomeNavbar() {
  const { authUser, logout } = useAuth();
  const { cart, getCart, clearCartData } = useCart();

  const [showDropdown, setShowDropdown] = useState(false);

  if (!cart.items) {
    getCart();
  }

  const handleLogout = () => {
    logout();
    clearCartData();
  };

  return (
    <div className="bg-neutral">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center">
            <img className="h-9" src={myLogo} alt="logo" />
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/category"
              className="text-white rounded-xl text-lg px-2 py-2"
            >
              Category
            </Link>
            <Link
              to="/orders"
              className="text-white rounded-xl text-lg px-2 py-2"
            >
              Orders
            </Link>
            <Link
              to="/products"
              className="text-white rounded-xl text-lg px-2 py-2"
            >
              Products
            </Link>

            {/* Cart Icon */}
            <Link to="/cart">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {cart.items && cart.items.length > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red w-5 h-5 rounded-full text-white flex justify-center items-center">
                    {cart.items.reduce((acc, item) => {
                      return acc + item.quantity;
                    }, 0)}
                  </div>
                )}
              </div>
            </Link>

            {/* User Dropdown */}
            {authUser && (
              <div className="relative">
                <button
                  className="text-white rounded-xl text-lg px-2 py-2"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Hello {authUser.name} {authUser.isAdmin && "(Admin)"}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20">
                    {authUser.isAdmin && (
                      <>
                        <Link
                          to="/admin/product"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Add Product
                        </Link>
                        <Link
                          to="/admin/orders/payments"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Order Summary
                        </Link>
                      </>
                    )}
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
