import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navClicked, setnavClicked] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    if (navClicked) {
      setNavbar(true);
    }
  };

  const barsClicked = () => {
    if (navClicked && window.scrollY <= 20) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
    setnavClicked(!navClicked);
  };

  const closeMenu = () => {
    setnavClicked(false);
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <header className={navbar ? "navbar active" : "navbar"}>
      <Link to="/">
        <img className="logo" src={Logo} alt="talaash logo" />
      </Link>
      <div className="menu-icon" onClick={barsClicked}>
        <i className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={navClicked ? "nav-menu active" : "nav-menu"}>
        <li onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closeMenu}>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
        <li onClick={closeMenu}>
          <Link to="/team">Team</Link>
          <ul>
            <li onClick={closeMenu}>
              <Link to="/team/3">3.0</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/team/2">2.0</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/team/1">1.0</Link>
            </li>
          </ul>
        </li>
        <li onClick={closeMenu}>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
        <li onClick={closeMenu}>
          <Link to="/sponsorship">Sponsor</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/sponsorship">Join</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
