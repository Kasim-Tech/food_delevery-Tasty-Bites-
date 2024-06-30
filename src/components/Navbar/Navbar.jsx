import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
// eslint-disable-next-line react/prop-types
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <>
      <div className="navbar">
     <Link to='/'>  <img src={assets.logo} alt="logo" className="logo" /></Link> 
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
          <Link to='/cart'><img src={assets.basket_icon} alt="cart" /></Link>  
            <div className={getTotalCartAmount() === 0 ?'':'dot'}></div>
          </div>
          <button onClick={()=>setShowLogin(true)} className="SignBTN">Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
