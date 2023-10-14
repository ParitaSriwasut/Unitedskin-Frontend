import myImage from "../images/a.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex overflow-hidden bg-neutral w-full">
      <div className="flex flex-1 item-center justify-center mt-[300px]">
        <div className="px-10">
          <div>
            <div className="text-orange text-6xl font-semibold">welcome to...</div>
            <div className="text-orange text-8xl font-semibold">unitedskin.in</div>
          </div>
          <div>
            <div>
              <div className="text-orange text-xl my-6">Already a number?</div>
              <Link to="/login">
              <button className="bg-green text-orange rounded-md text-xl font-semibold py-4 px-8">
                Login to continue
              </button>
              </Link>
            </div>
            <div>
              <div className="text-orange text-xl py-6">First time?</div>
              <Link to="/register">
              <button className="bg-green text-orange rounded-md text-xl font-semibold py-4 px-8">
                Create new account
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "50vw" }} className="right">
        <div style={{ display: "flex", justifyContent: "end" }}>
          <img src={myImage} alt="" />
        </div>
      </div>
    </div>
  );
}
