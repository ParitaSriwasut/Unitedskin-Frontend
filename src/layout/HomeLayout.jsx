import { Outlet } from "react-router-dom";
import HomeNavBar from "../components/navbar/HomeNavbar";
import HomeFooter from "../components/footer/HomeFooter";

export default function HomeLayout() {
  return (
    <div className="flex flex-col">
      <HomeNavBar />
      <Outlet />
      <HomeFooter />
    </div>
  );
}
