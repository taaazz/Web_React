import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/navbar.module.css";
import Logo from "../assets/logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <nav className={Styles.header}>
        <div>
          <img className={Styles.Logo} src={Logo} alt="logo" />
        </div>
        <ul className={Styles.topmenu}>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <div className={Styles.cart}>
          <FaShoppingBag />
        </div>
        <div className={Styles.bell}>
          <FaBell />
        </div>
      </nav>
    );
  }
}

export default Navbar;
