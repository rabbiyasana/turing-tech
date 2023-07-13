import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utilities/api";
import { AuthHeader } from "../utilities/header";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export function AuthProvider(props) {
  const navigate = useNavigate();
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
    navigate("/home ");
  };

  // logout function

  const Logout = () => {
    setUser("");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    navigate("/");
  };
  useEffect(() => {
    if (user == "") {
      navigate("/");
    }
    if (user != "") {
      navigate("/home");
    }
  }, [user]);

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
