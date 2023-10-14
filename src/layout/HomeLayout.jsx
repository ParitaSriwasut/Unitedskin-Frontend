import { Outlet } from "react-router-dom";
import Header from "../features/homepage/Header";
import HomeNavbar from "../features/homepage/HomeNavbar";
import HomeBody from "../features/homepage/HomeBody";

export default function HomeLayout() {
  return (
    <div>
      <HomeNavbar />
      <Header />
      <HomeBody />
      <Outlet />
    </div>
  );
}
