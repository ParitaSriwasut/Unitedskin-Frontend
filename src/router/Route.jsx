import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomeLayout from "../layout/HomeLayout";
// import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";
import Home from "../pages/Home";
import AdminPage from "../pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/welcome",
    element: (
      <Authenticated>
        <LandingPage />,
      </Authenticated>
    ),
  },
  {
    path: "/admin",
    element: (
      <Authenticated>
        <AdminPage />
      </Authenticated>
    ),
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
