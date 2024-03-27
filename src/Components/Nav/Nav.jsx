import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import headphones from "../../assets/shared/desktop/thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import orangeIcon from "../../assets/shared/desktop/icon-arrow-right.svg";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import "./Nav.scss";

export default function Nav() {
  const [isDesktop, setDesktop] = useState();

  return (
    <>
      <div className="nav__wrapper">
        <nav className="nav">
          <ul className="nav__list-container">
            <li className="nav__list-item">
              <img className="nav__list-img" src={headphones}></img>
              <p className="nav__list-title">headphones</p>
              <div className="nav__shop-container">
                <p className="nav__text">shop</p>
                <img className="nav__orange-icon" src={orangeIcon}></img>
              </div>
            </li>
            <li className="nav__list-item">
              <img className="nav__list-img" src={speakers}></img>
              <p className="nav__list-title">speakers</p>
              <div className="nav__shop-container">
                <p className="nav__text">shop</p>
                <img className="nav__orange-icon" src={orangeIcon}></img>
              </div>
            </li>
            <li className="nav__list-item">
              <img className="nav__list-img" src={earphones}></img>
              <p className="nav__list-title">Earphones</p>
              <div className="nav__shop-container">
                <p className="nav__text">shop</p>
                <img className="nav__orange-icon" src={orangeIcon}></img>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
