import React from "react";
import { useAuth } from "../Contexts/AuthContext";

import "./Results.css";

const Results = (props) => {
    const { logout } = useAuth();
    return (
        <div className={"results-container"}>
            <div className={"main-row-container"}>
                <img
                    src={require("../Assets/images/logo.png")}
                    className={"image"}
                    alt="background-img"
                />
                <span className={"main-text"}>Friender</span>
            </div>

            <span className={"secondary-text"}>YOU WILL MEET</span>
            <br></br>
            <span className={"secondary-name-text"}>SHAMSUDEEN ROY</span>
            <br></br>
            <span className={"secondary-text"}>AT</span>
            <br></br>
            <span className={"secondary-name-text"}>CCIS</span>
            <button className="submit-btn" id="logout-result" onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default Results;
