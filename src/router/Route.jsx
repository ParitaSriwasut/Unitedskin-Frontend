import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomeLayout from "../layout/HomeLayout";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
// import Authenticated from "../features/auth/Authenticated";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import CreateProduct from "../pages/Admin/CreateProduct";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

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
      { path: "/cart", element: <Cart /> },
      { path: "/payment", element: <Payment /> },
      { path: "/products", element: <ProductList /> },
      { path: "/products/:id", element: <ProductDetail /> },
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
