import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import WelcomePage from "../pages/WelcomePage";
import HomeLayout from "../layout/HomeLayout";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/Checkout";
import Category from "../components/content/Category";
import AboutUs from "../components/content/AboutUs";
import AdminMainPage from "../layout/AdminLayout";
import Admin from "../pages/Admin";

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
      { path: "/register", element: <Register /> },
      { path: "/category", element: <Category /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <ProductList /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/checkout", element: <Checkout /> },
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
    path: "/admin",
    element: <AdminMainPage />,
    children: [{ path: "/admin/home", element: <Admin /> }],
  },
  // {
  //   path: "/admin/product",
  //   element: <CreateProduct />,
  // },
  // {
  //   path: "/admin/product/:id",
  //   element: <CreateProduct />,
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
