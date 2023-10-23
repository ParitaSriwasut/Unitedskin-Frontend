import myImage from "../images/a.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex overflow-hidden bg-neutral w-full">
      <div className="flex flex-1 item-center justify-center mt-[230px]">
        <div className="px-10">
          <div>
            <div className="text-orange text-6xl font-semibold">
              welcome to...
            </div>
            {/* need to set Route */}
            <div className="text-orange text-8xl font-semibold flex gap-7">
              unitedskin.in
              <Link to="/" className="flex items-center">
                <button className="bg-white relative font-semibold text-green z-10 text-xl mt-10 mb-5 py-2 px-3 hover:bg-rose outline-double outline-3 outline-offset-2 truncate">
                  OUR STORE
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <div className="text-orange text-xl my-4">Already a number?</div>
              <Link to="/login">
                <button className="bg-white text-green text-xl font-semibold hover:bg-gray py-4 px-7">
                  Login to continue
                </button>
              </Link>
            </div>
            <div>
              <div className="text-orange text-xl py-4">First time?</div>
              <Link to="/register">
                <button className="bg-white text-green text-lg font-semibold hover:bg-gray py-4 px-6">
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
