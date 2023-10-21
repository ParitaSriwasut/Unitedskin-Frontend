import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomeLayout from "../layout/HomeLayout";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
// import Authenticated from "../features/auth/Authenticated";
import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
import Payment from "../pages/Payment";
import ConfirmOrder from "../pages/ConfirmOrder";
import CreateProduct from "../pages/Admin/CreateProduct";
import ProductList from "../components/Product/ProductList";
import ProductDetails from "../components/Product/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: (
          <RedirectIfAuthenticated>
            <Login />{" "}
          </RedirectIfAuthenticated>
        ),
      },
      { path: "/register", element: <Register /> },
      { path: "/shopping_cart", element: <ShoppingCart /> },
      { path: "/payment", element: <Payment /> },
      { path: "/confirm_order", element: <ConfirmOrder /> },
      { path: "/product_list", element: <ProductList /> },
      { path: "/product_details", element: <ProductDetails /> },
    ],
  },
  {
    path: "/admin/product",
    element: <CreateProduct />,
  },
  {
    path: "/welcome",
    element: <LandingPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
