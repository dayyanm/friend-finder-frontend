import React, { useEffect } from "react";
import "./Login.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../Contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-box-top">
          <img
            src={require("../Assets/images/logo.png")}
            alt="friendr logo"
            id="login-logo-img"
          />
          <h1 id="title-logo">Friender</h1>
        </div>
        <div className="login-box-bottom">
          <div className="google-login-container">
            <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CID}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  login(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
          <div className="login-box-links">
            <a
              href="https://github.com/dayyanm/friend-finder-frontend"
              className="login-box-link"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
