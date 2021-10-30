import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="col-1">
        <button className="btn">
          My Projects
          <i className="chevron-down-icon fas fa-chevron-down"></i>
        </button>
        <button className="btn">
          Create
          <i className="plus-icon fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="col-2">
        <div className="input">
            <i className="search-icon fa-solid fa-search"></i>
          <input className="search" type="text" placeholder="Search" />
        </div>
        <img className="avatar" src="" alt="" />
        <span>Hello, Syed Taha</span>
        <i class="icon fas fa-sort-down"></i>
        <i class="icon fas fa-info-circle"></i>
        <i class="icon fas fa-bell"></i> 
      </div>
    </div>
  );
}

export default Navbar;
