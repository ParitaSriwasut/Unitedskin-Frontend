import { Outlet } from "react-router-dom";
// import LandingPage from "../pages/LandingPage";

export default function Layout() {
  return (
    <div>
      {/* <LandingPage /> */}
      <Outlet />
    </div>
  );
}
