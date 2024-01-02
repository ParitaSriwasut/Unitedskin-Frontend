import { useState } from "react";
// import { toast } from 'react-toastify';
import myImage from "../images/login-2.png";
import LoginInput from "../features/auth/LoginInput";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();
  const [authUser, setAuthUser] = useState(null);

  const navigate = useNavigate();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const res = await login(input);
    setAuthUser(res);
    navigate("/");
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
            <div className="flex flex-row justify-center items-center">
              <span className="text-neutral pt-3 flex flex-col justify-center">
                Create a member?
              </span>
              <Link
                to="/register"
                className=" text-neutral pt-3 flex font-bold animate-pulse justify-center ml-4"
              >
                Register here
              </Link>
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
