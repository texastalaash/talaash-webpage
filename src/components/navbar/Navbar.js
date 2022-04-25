import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

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
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <Link to="/team">Team</Link>
            <ul>
              <li>
                <Link to="/team/3">3.0</Link>
              </li>
              <li>
                <Link to="/team/2">2.0</Link>
              </li>
              <li>
                <Link to="/team/1">1.0</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/legacy">Legacy</Link>
          </li>
          <li className="close">X</li>
        </ul>
        <div className="menu">Menu</div>
      </div>
    </header>
  );
};

export default Navbar;
