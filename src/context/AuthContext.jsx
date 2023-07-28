import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
    const response = await axios({
      method: "post",
      url: `${baseUrl}/auth/login`,
      data: {
        username,
        password,
      },
    });
    console.log(response.data);
    const { user, access_token, refresh_token } = response.data;

    // the user from res use it to manag the state
    setUser(user);
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("user", user.id);
    localStorage.setItem("startTime", new Date().toLocaleString());
    // navigate("/home ");
  };

  // logout function

  const Logout = () => {
    setUser("");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    localStorage.removeItem("startTime");
    navigate("/");
  };

  const refreshToken = useCallback(async () => {
    try {
      const response = await axios({
        method: "post",
        url: `${baseUrl}/auth/refresh-token`,
        headers: AuthHeader(),
      });
      const { access_token, user } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("user", user.id);
      setUser(user);
    } catch (error) {
      if (error) {
        Logout();
      }
    }
  }, []);

  useEffect(() => {
    const startTime = localStorage.getItem("startTime");
    const timeFrom_token = new Date(startTime);
    const refreshTime = new Date();
    const time_less_thn_ten = 9 * 60 * 1000;
    if (refreshTime.getTime() - timeFrom_token.getTime() > 9 * 60 * 1000) {
      refreshToken();
    }

    const interval = setInterval(() => {
      refreshToken();
    }, 9 * 60 * 1000);

    return () => clearInterval(interval);
  }, [refreshToken]);
  // // if access token and user is not available redirect to login

  useEffect(() => {
    const logggedUser = localStorage.getItem("user");
    if (logggedUser) {
      headers: AuthHeader();
      navigate("/home");
    } else {
      navigate("/");
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
