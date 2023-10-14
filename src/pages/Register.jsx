import { useState } from 'react';
import { toast } from 'react-toastify';
import RegisterInput from "../features/auth/RegisterInput"
import Joi from "joi";
import InputErrorMessage from "../features/auth/InputErrorMessage"
import { useAuth } from "../hooks/use-auth"
import myImage from "../images/register-1.png";

const registerSchema = Joi.object({
  name: Joi.string().trim().required(),
  username: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).required(),
  mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  password: Joi.string()
  .pattern(/^[a-zA-Z0-9]{6,30}$/)
  .trim()
  .required(),
confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required()
});

const validateRegister = input =>
{
  const { error } = registerSchema.validate(input, { abortEarly: false });
  
  if (error)
  {
    const result = error.details.reduce((acc, el) =>
    {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function Register()
{
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword:"",
  })
  
  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch(err => {
      toast.error(err.response?.data.message);
    });
  };

return (
  <>
  <div className="flex bg-white">
      <div className="flex flex-1 item-center justify-center mt-[300px]">
        <div className="flex item-center h-fit">
          <form className="h-fit"
          onSubmit={handleSubmitForm}>
            <div className="grid grid-cols-2 justify-stretch gap-6 ">
              <div>
              <RegisterInput

                placeholder="name"
                value={input.name}
                onChange={handleChangeInput}
                name="name"
                hasError={error.name}
                />
               {error.name && <InputErrorMessage message={error.name} />}
              </div>
              <div>
              <RegisterInput

                placeholder="username"
                value={input.username}
                onChange={handleChangeInput}
                name="username"
                hasError={error.username}
                />
              {error.username && <InputErrorMessage message={error.username} />}
              </div>
              <div>
              <RegisterInput

                placeholder="email"
                value={input.email}
                onChange={handleChangeInput}
                name="email"
                hasError={error.email}
                />
              {error.email && <InputErrorMessage message={error.email} />}
              </div>
              <div>
              <RegisterInput

                placeholder="mobile"
                value={input.mobile}
                onChange={handleChangeInput}
                name="mobile"
                hasError={error.mobile}
                />
              {error.mobile && <InputErrorMessage message={error.mobile} />}
              </div>
              <div>
              <RegisterInput

                placeholder="password"
                value={input.password}
                onChange={handleChangeInput}
                name="password"
                hasError={error.password}
                />
              {error.mobile && <InputErrorMessage message={error.mobile} />}
              </div>
              <div>
              <RegisterInput

                placeholder="confirm password"
                value={input.confirmPassword}
                onChange={handleChangeInput}
                name="confirmPassword"
                hasError={error.confirmPassword}
                />
              {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
              </div>
            </div>
            <div className="pt-6 flex justify-center">
              <button className="bg-green text-orange rounded-lg text-md font-semibold py-2 px-20 ">
                sign up
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
  </>
  );
}
  