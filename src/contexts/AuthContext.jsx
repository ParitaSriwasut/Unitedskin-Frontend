import { useState } from "react";
import { createContext } from "react";
import axios from "../configs/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);
  // const [checkUser, setCheckUser] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((result) => {
          setAuthUser(result.data.user);
          console.log(result.data.user.role);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    console.log(res.data.accessToken);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const register = async (registerInputObj) => {
    const res = await axios.post("/auth/register", registerInputObj);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  // const updateProfile = async data => {
  //   const res = await axios.patch('/user', data);
  //   setAuthUser({ ...authUser, ...res.data });
  // };

  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        register,
        logout,
        initialLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
