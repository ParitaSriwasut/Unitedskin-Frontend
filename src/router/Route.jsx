import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import WelcomePage from "../pages/WelcomePage";
import HomeLayout from "../layout/HomeLayout";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import RedirectIfAdmin from "../features/auth/RedirectIfAdmin";
import Authenticated from "../features/auth/Authenticated";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import CreateProduct from "../pages/Admin/CreateEditProduct";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/Checkout";
import Category from "../components/content/Category";
import AboutUs from "../components/content/AboutUs";
import OrderList from "../pages/OrderList";
import OrderSummary from "../pages/OrderSumary";
import AdminOrderSummaryPage from "../pages/Admin/OrderSummary";

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/",
    element: (
      <Authenticated>
        <HomeLayout />
      </Authenticated>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/category", element: <Category /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <ProductList /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/orders", element: <OrderList /> },
      { path: "/orders/payment/:id", element: <OrderSummary /> },
      {
        path: "/admin/product",
        element: (
          <RedirectIfAdmin>
            <CreateProduct />,
          </RedirectIfAdmin>
        ),
      },
      {
        path: "/admin/product/:id",
        element: (
          <RedirectIfAdmin>
            <CreateProduct />,
          </RedirectIfAdmin>
        ),
      },
      {
        path: "/admin/orders/payments",
        element: (
          <RedirectIfAdmin>
            <AdminOrderSummaryPage />,
          </RedirectIfAdmin>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <Login />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuthenticated>
        <Register />
      </RedirectIfAuthenticated>
    ),
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
