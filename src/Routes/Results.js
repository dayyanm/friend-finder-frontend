import React from "react";
import { useAuth } from "../Contexts/AuthContext";

import "./Results.css";

const Results = (props) => {
  const { logout } = useAuth();
  const nList = [
    "Jason Kenney",
    "Jamie Smith",
    "Ali Rafiei",
    "Dayyan Muhammad",
    "Hassaan M",
    "Ronan",
    "Johnny",
    "Ayush Roy",
    "Shamsudeen M",
  ];
  const lList = [
    "Remedy Cafe in CCIS",
    "Tim Hortons in ETLC",
    "Startbucks CCIS",
    "Subway Hub mall",
    "Subway in SUB",
    "Panda Express in CAB",
    "Starbucks in ECHA",
    "Ho Chinese in HUB mall",
  ];
  const tList = [
    "Monday 6pm",
    "Tuesday 3pm",
    "Wednesday 1pm",
    "Thursday 10am",
    "Friday 5pm",
  ];
  return (
    <div className={"results-container"}>
      <div className={"main-row-container"}>
        <span className={"main-text"}>Friender</span>
      </div>

      <span className={"secondary-text"}>YOU WILL MEET</span>
      <br></br>
      <span className={"secondary-name-text"}>
        {nList[Math.floor(Math.random() * nList.length)]}
      </span>
      <br></br>
      <span className={"secondary-text"}>AT</span>
      <br></br>
      <span className={"secondary-name-text"}>
        {lList[Math.floor(Math.random() * lList.length)]},{" "}
        {tList[Math.floor(Math.random() * tList.length)]}
      </span>
      <button className="submit-btn" id="logout-result" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Results;
