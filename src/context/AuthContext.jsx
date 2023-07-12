import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export function AuthProvider(props) {
  const [loggedIn, setLoggedIn] = useState(!!props.logged);
  console.log(props.logged);

  const login = async (username, password) => {
    const res = await axios({
      method: "post",
      url: `${baseURL}/auth/login`,
      data: {
        username,
        password,
      },
    });
    console.log(res.data);
  };

  return (
    <>
      <AuthContext.Provider value={{ loggedIn, setLoggedIn, login }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
