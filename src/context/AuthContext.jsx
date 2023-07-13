import { createContext, useContext, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utilities/api";
import { AuthHeader } from "../utilities/header";
const AuthContext = createContext();

export function AuthProvider(props) {
  // const [loggedIn, setLoggedIn] = useState(!!props.logged);
  // console.log(props.logged);
  const [user, setUser] = useState("");
  // login function
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

    // the user from res use it to manag the state
    setUser(user);
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("user", user.id);
  };

  // logout function

  const Logout = () => {
    setUser("");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
  };
  return (
    <>
      <AuthContext.Provider value={{ Login, Logout, user }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
