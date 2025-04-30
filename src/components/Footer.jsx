import "./components-styles/Footer.css";
import Fb from "../assets/img/facebook.svg";

import YB from "../assets/img/youtube.svg";
import TW from "../assets/img/twitter.svg";
import LI from "../assets/img/linkedin.svg";
import INST from "../assets/img/instagram.svg";
export default function Footer() {
  return (
    <footer className="light-bg footer">
      <div className="second-menu wrapper">
        <nav className="second-menu-links">
          <a href="">Products</a>
          <a href="">Returns</a>
          <a href="">FAQ</a>
          <a href="">Shipping</a>
          <a href="">About us</a>
          <a href="">Contact us</a>
        </nav>
        <nav className="second-menu-links">
          <a href="">
            <img src={YB} alt="youtube icon" />
          </a>
          <a href="">
            <img src={Fb} alt="facebook icon" />
          </a>
          <a href="">
            <img src={TW} alt="twiter icon" />
          </a>
          <a href="">
            <img src={INST} alt="instagram icon" />
          </a>
          <a href="">
            <img src={LI} alt="linkedin icon" />
          </a>
        </nav>
      </div>
      <div className="footer-banner">
        <p className="footer-banner-text">
          Copyright Green thumb. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
