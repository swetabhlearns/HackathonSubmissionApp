import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="nav">
      <nav className="navBar">
        <div className="navBarImg">
          <img src={logo} alt="logo" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
