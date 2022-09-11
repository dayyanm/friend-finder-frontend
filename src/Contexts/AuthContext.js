import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [token, setToken] = useLocalStorage("token", "");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            setUser("temp");
            navigate("../", { replace: true });
        }
    }, [token]);

    const login = async (googleData) => {
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

        if (data.loginValid) {
            setToken(data.jwtToken);
            setUser(data);
            navigate("../", { replace: true });
        }
    };

    const logout = () => {
        setUser();
        setToken("");
    };

    useEffect(() => {}, [token]);

    const value = { user, token, login, logout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
