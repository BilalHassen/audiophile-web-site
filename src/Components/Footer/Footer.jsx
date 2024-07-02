import "./Footer.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <hr className="footer__divider"></hr>
          <div className="footer__logo-container">
            <Link to="/#top">
              <img className="footer__logo" src={logo} alt="footer logo" />
            </Link>
            <ul className="footer__nav">
              <Link to="/#top">
                <li className="footer__nav-item">home</li>
              </Link>
              <Link to="/headphones#top">
                <li className="footer__nav-item">headphones</li>
              </Link>
              <Link to="/speakers#top">
                <li className="footer__nav-item">speaker</li>
              </Link>
              <Link to="/earphones#top">
                <li className="footer__nav-item">earphones</li>
              </Link>
            </ul>
          </div>
          <div className="footer__info-txt">
            <p className="footer__para">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="footer__copyright">
              <p className="footer__copyright-text">
                Copyright 2021. All Rights Reserved
              </p>
              <ul className="footer__icons-container">
                <li className="footer__icons">
                  <img
                    className="footer__icon"
                    src={facebookIcon}
                    alt="Facebook"
                  />
                </li>
                <li className="footer__icons">
                  <img
                    className="footer__icon-twitter"
                    src={twitterIcon}
                    alt="Twitter"
                  />
                </li>
                <li className="footer__icons">
                  <img
                    className="footer__icon"
                    src={instagramIcon}
                    alt="Instagram"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
