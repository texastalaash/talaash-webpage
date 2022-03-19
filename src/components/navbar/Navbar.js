import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <header className={navbar ? "navbar active" : "navbar"}>
      <Link to="/">
        <img className="logo" src={Logo} alt="talaash logo" />
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="">Profile</Link>
          </li>
          <li>
            <Link to="/performances">Performances</Link>
          </li>
          <li className="close">X</li>
        </ul>
        <div className="menu">Menu</div>
      </div>
    </header>
  );
};

export default Navbar;
