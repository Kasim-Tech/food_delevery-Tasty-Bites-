import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <Link to='/'
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <a
          href="#explore-menu"
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
          href="#app-download"
            onClick={() => setMenu("Mobile-app")}
            className={menu === "Mobile-app" ? "active" : ""}
          >
            Mobile-app
          </a>
          <a
          href="#footer"
            onClick={() => setMenu("Contact")}
            className={menu === "Contact" ? "active" : ""}
          >
            Contact
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="searchlogo" />
          <div className="nevbar-search-icon"></div>
          <div className="navbar-cart-icon">
            <img src={assets.basket_icon} alt="cart" />
            <div className="dot"></div>
          </div>
          <button className="SignBTN">Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
