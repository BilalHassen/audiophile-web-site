import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import headphones from "../../assets/shared/desktop/thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import orangeIcon from "../../assets/shared/desktop/icon-arrow-right.svg";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav({ handleCartModalinChild, activeClass }) {
  const [isDesktop, setDesktop] = useState();

  console.log(activeClass);
  if (activeClass) {
    console.log("true");
  }

  return (
    <>
      <div className={activeClass ? "nav__wrapper" : null}>
        <nav className={activeClass ? "nav" : "midNav"}>
          <ul className="nav__list-container">
            <li className="nav__list-item">
              <img className="nav__list-img" src={headphones}></img>
              <p className="nav__list-title">headphones</p>
              <Link to="/headphones">
                <div className="nav__shop-container">
                  <p className="nav__text">shop</p>
                  <img className="nav__orange-icon" src={orangeIcon}></img>
                </div>
              </Link>
            </li>
            <li className="nav__list-item">
              <img className="nav__list-img" src={speakers}></img>
              <p className="nav__list-title">speakers</p>
              <Link to="/speakers">
                <div className="nav__shop-container">
                  <p className="nav__text">shop</p>
                  <img className="nav__orange-icon" src={orangeIcon}></img>
                </div>
              </Link>
            </li>
            <li className="nav__list-item">
              <img className="nav__list-img" src={earphones}></img>
              <p className="nav__list-title">Earphones</p>
              <Link to="/earphones">
                <div className="nav__shop-container">
                  <p className="nav__text">shop</p>
                  <img className="nav__orange-icon" src={orangeIcon}></img>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
