import { createContext, useContext, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utilities/api";
const AuthContext = createContext();

export function AuthProvider(props) {
  const [loggedIn, setLoggedIn] = useState(!!props.logged);
  console.log(props.logged);
  const Login = async (username, password) => {
    const res = await axios({
      method: "post",
      url: `${baseUrl}/auth/login`,
      data: {
        username,
        password,
      },
    });
    console.log(res.data);
    const { user, access_token, refresh_token } = res.data;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("user", user.id);
  };

  return (
    <>
      <AuthContext.Provider value={{ loggedIn, setLoggedIn, Login }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
