import myImage from "../images/a.png";
// import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{ display: "flex" }} className="bg-neutral w-full">
      <div style={{ width: "50vw" }}>
        <div className="px-10">
          <div>
            <div className="text-orange text-2xl">welcome to</div>
            <div className="text-orange text-5xl ">unitedskin.in</div>
          </div>
          <div>
            <div>
              <div className="text-orange text-xl">Already a number?</div>
              {/* <Link to="/login"> */}
              <button className="bg-green text-orange rounded-md text-sm font-semibold py-3 px-4">
                Login to continue
              </button>
              {/* </Link> */}
            </div>
            <div>
              <div className="text-orange text-xl">First time?</div>

              {/* <Link to="/register"> */}
              <button className="bg-green text-orange rounded-md text-sm font-semibold py-3 px-4">
                Create new account
              </button>
              {/* </Link> */}
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
