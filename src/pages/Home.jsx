import Header from "../features/homepage/Header";
import HomeBody from "../features/homepage/HomeBody";
import HomeNavbar from "../features/homepage/HomeNavbar";

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <Header />
      <HomeBody />
    </div>
  );
}
