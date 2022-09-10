import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/index.css";
import App from "./Routes/App";
import Login from "./Routes/Login";
import Results from "./Routes/Results";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import PrivateRoute from "./Routes/PrivateRoute";
import Results from "./Routes/Results";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<App />}></Route>
            <Route path="/results" element={<Results />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
