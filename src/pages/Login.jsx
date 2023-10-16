import { useState } from "react";
// import { toast } from 'react-toastify';
import myImage from "../images/login-2.png";
import LoginInput from "../features/auth/LoginInput";
import { useAuth } from "../hooks/use-auth";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();
  // const [authUser, setAuthUser] = useState(null);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await login(input);
    window.location.href = "/";
    //   .then((res) => {
    //     navigate("/");
    //     console.log(res);
    //   })
    //   .catch((err) => {});
  };

  return (
    <div className="flex bg-white">
      <div className="flex flex-1 item-center justify-center mt-[300px]">
        <div className="flex item-center h-fit">
          <form className="h-fit" onSubmit={handleSubmitForm}>
            <LoginInput
              type="text"
              placeholder="username"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
            <div className="pt-4"></div>
            <LoginInput
              placeholder="password"
              type="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <div className="pt-4 flex justify-center">
              <button className="bg-green text-orange rounded-lg text-md font-semibold py-2 px-20 ">
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
