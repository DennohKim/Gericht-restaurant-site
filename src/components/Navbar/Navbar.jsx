import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from '../../constants/images';
import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
  <div className="app__navbar-logo">
    <img src="(image.gericht" alt="app logo" />
  </div>
  <ul className="app__navbar-links">
  <li className="p_opensans"><a href="#home">Home</a></li>
  <li className="p_opensans"><a href="#about">About</a></li>
  <li className="p_opensans"><a href="#contact"> Contact Us </a></li>
  <li className="p_opensans"><a href="#blog"> Blog </a></li>
  <li className="p_opensans"><a href="#landing"> Landing </a></li>
  </ul>

  </nav>
);

export default Navbar;
