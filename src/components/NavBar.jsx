import React from "react";
import PrimaryButton from "./PrimaryButton";
import logo from "../img/Logo/NavbarLogo.png";
import "../ComponentsCss/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
            <ul className="menu-list">
                <a className="nav-link" href="/Home">Home</a>
                <a className="nav-link" href="/About">About</a>
                <a className="nav-link" href="/Services">Services</a>
                <a className="nav-link" href="/Pricing">Pricing</a>
                <a className="nav-link" href="/Blog">Blog</a>
                <a className="nav-link" href="/Contact">Contact</a>
            </ul>
        </div>
        <div className="contactButton">
            <PrimaryButton button = {"Contact Us"} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
