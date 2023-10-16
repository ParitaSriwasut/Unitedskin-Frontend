//HomeNavbar.jsx
import { Link } from "react-router-dom";
import myLogo from "../../assets/logo/Logo-2.png";
import { useAuth } from "../../hooks/use-auth";

export default function HomeNavbar() {
  const { authUser, logout } = useAuth();
  return (
    <div className="bg-neutral">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-2">
          <Link to="/home" className="flex items-center">
            <img className="h-9" src={myLogo} alt="logo" />
          </Link>
          <ul className="hidden md:flex space-x-12">
            <li>
              <Link
                to="/home"
                className="text-white focus:ring-2 focus:ring-green focus:border-green rounded-lg text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/category"
                className="text-white focus:ring-2 focus:ring-green focus:border-green rounded-lg text-xl"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white focus:ring-2 focus:ring-green focus:border-green rounded-lg text-xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white focus:ring-2 focus:ring-green focus:border-green rounded-lg text-xl"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="flex items-center lg:order-2">
            {authUser ? (
              <Link
                to="/"
                className=" text-white focus:ring-2 focus:ring-green focus:border-green rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Hello {authUser.name}
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-white focus:ring-2 focus:ring-green focus:border-green rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Log in
              </Link>
            )}

            {authUser ? (
              <Link
                to="/"
                className="text-white focus:ring-2 focus:ring-green focus:border-green rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                onClick={logout}
              >
                Log out
              </Link>
            ) : (
              <div></div>
            )}
          </div>

          <div className="hidden xl:flex space-x-5 items-center">
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </Link>
            <Link to="#">
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
            </Link>
            <Link to="#">
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
