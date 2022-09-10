import React, { useEffect } from "react";
import "./Login.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function Login() {
  useEffect(() => {
    console.log(process.env.REACT_APP_OAUTH_CID);
  });

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="google-login-container">
          <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
}
