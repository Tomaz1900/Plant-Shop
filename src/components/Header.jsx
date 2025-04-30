import "./components-styles/Header.css";
import LOGO from "../assets/img/Logo.svg";
import Search from "../assets/img/Search.svg";
import Cart from "../assets/img/cart.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-bg">
      <div className="wrapper header">
        <a href="#">
          <img src={LOGO} alt="LOGO" />
        </a>
        <nav className="header-links">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
        </nav>
        <div className="header-right">
          <div className="header-search">
            SEARCH
            <img src={Search} alt="Search icon" />
          </div>
          <div className="shopcart">
            <a href="">
              <img src={Cart} alt="CART" />
              <span className="cart-number">3</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
