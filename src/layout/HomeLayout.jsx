import { Outlet } from "react-router-dom";
import HomeNavBar from "../components/navbar/HomeNavbar";
import HomeHeader from "../components/header/HomeHeader";
import HomeFooter from "../components/footer/HomeFooter";
import HomeContent from "../components/content/HomeContent";

export default function Layout() {
  return (
    <>
      <HomeNavBar />
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
      <Outlet />
    </>
  );
}
