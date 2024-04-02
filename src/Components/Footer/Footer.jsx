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
        <div className="footer__info-txt">
          <p className="footer__para">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="footer__copyright">
            <p className="footer__copyright-text">
              Copyright 2021. All Rights Reserved
            </p>
            <ul className="footer__icons-container">
              <li className="footer__icons">
                <img className="footer__icon" src={facebookIcon}></img>
              </li>
              <li className="footer__icons">
                <img className="footer__icon" src={instagramIcon}></img>
              </li>
              <li className="footer__icons">
                <img className="footer__icon" src={twitterIcon}></img>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
