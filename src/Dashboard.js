import React from "react";
import "./Dashboard.css";
import logo from "./logo.svg";

function Dashboard() {
  return (
    <div className="one">
      <div className="main">
        <div className="second">
          <img src={logo} alt="" />
        </div>
        <div className="third">
          <h2> Organize anything</h2>
          <p>
            Put everything in one place and start moving things forward with
            your first worspace.
          </p>

          <button className="butn">
            <b>Create New Project</b>
            <i className="fa-solid fa-plus"> </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
