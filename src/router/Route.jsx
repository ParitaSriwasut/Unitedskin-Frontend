import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../layout/Layout";
import HomeLayout from "../layout/HomeLayout";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
// import Authenticated from "../features/auth/Authenticated";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <Home /> },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/",
    element: (
      <RedirectIfAuthenticated>
        <LandingPage />
      </RedirectIfAuthenticated>
    ),
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
