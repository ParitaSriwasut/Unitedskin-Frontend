import myImage from "../images/login-1.png";

export default function Register() {
  return (
    <div className="flex bg-white">
      <div className="flex flex-1 item-center justify-center mt-[300px]">
        <div className="flex item-center h-fit">
          <form className="h-fit">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="username"
              />
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                type="password"
                placeholder="password"
              />
            <div className="pt-6 flex justify-center">
              <button className="bg-green text-orange rounded-lg text-md font-semibold py-2 px-7 ">
                log in
              </button>
            </div>
            <div>
              <span className="text-gray-400 pt-3 flex justify-center">
                already a member? login here
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 right">
        <div style={{ display: "flex", justifyContent: "end" }}>
          <img src={myImage} alt="" />
        </div>
      </div>
    </div>
  );
}
