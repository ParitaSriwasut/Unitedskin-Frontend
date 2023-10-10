import LoginButton from "../features/auth/LoginButton";
import CreateNewAccountButton from "../features/auth/CreateNewAccountButton";
import myImage from "../images/a.png";

export default function LandingPage() {
  return (
    <>
      <div className="bg-neutral w-full">
        <div className="px-10">
          <div>
            <div className="text-orange text-2xl">welcome to</div>
            <div className="text-orange text-5xl ">unitedskin.in</div>
          </div>
          <div>
            <div>
              <p>Already a number?</p>
              <LoginButton />
            </div>
            <div>
              <p>First time?</p>
              <CreateNewAccountButton />
            </div>
          </div>
        </div>
        <div className="apsolute right-0">
          <img src={myImage} alt="" />
        </div>
      </div>
    </>
  );
}
