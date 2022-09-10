import { createContext, useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useLocalStorage("token", "");

  const login = async (googleData) => {
    console.log(googleData);
    const res = await fetch(process.env.REACT_APP_API_URL + "auth/login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.credential,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    // if (data.loginValid) {
    //     setToken(data.jtoken);
    //     assignUser(true, data.jtoken);
    // } else {
    //     setLoginErr(data.message);
    // }
  };

  const logout = () => {
    setUser();
    setToken("");
  };

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {loading && children}
    </AuthContext.Provider>
  );
}
