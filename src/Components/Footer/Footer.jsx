import "./Footer.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo-container">
          <img className="footer__logo" src={logo} alt={"footer logo"}></img>
          <ul className="footer__nav">
            <li className="footer__nav-item">home</li>
            <li className="footer__nav-item">headphones</li>
            <li className="footer__nav-item">speaker</li>
            <li className="footer__nav-item">earphones</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
