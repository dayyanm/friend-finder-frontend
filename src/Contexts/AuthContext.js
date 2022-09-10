import { createContext, useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useLocalStorage("token", "");

  const login = () => {};

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
