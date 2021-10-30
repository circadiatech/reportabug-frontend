import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="col-1">
        <button className="btn">
          My Projects
          <i className="fas fa-chevron-down"></i>
        </button>
        <button className="btn">
          Create
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="col-2">
        <div className="input">
            <i className="fa-solid fa-search"></i>
          <input className="search" type="text" placeholder="Search" />
        </div>
        <img src="" alt="" />
        <span>Hello, Syed Taha</span>
        <i class="fas fa-sort-down"></i>
        <i class="fas fa-info-circle"></i>
        <i class="fas fa-bell"></i> 
      </div>
    </div>
  );
}

export default Navbar;
