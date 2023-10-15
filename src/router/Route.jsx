import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomeLayout from "../layout/HomeLayout";
// import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
// import Authenticated from "../features/auth/Authenticated";
import Home from "../pages/Home";
import AdminPage from "../pages/AdminPage";
import ShoppingCart from "../pages/ShoppingCart";
import Payment from "../pages/Payment";
import ConfirmOrder from "../pages/ConfirmOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/shopping_cart", element: <ShoppingCart /> },
      { path: "/payment", element: <Payment /> },
      { path: "/confirm_order", element: <ConfirmOrder /> },
    ],
  },
  {
    path: "/welcome",
    element: <LandingPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
