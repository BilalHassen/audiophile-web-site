import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import headphones from "../../assets/shared/desktop/thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import orangeIcon from "../../assets/shared/desktop/icon-arrow-right.svg";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        AUDIOPHILE
        <FontAwesomeIcon icon={faBars} className="header__icon" />
      </div>

      <nav className="nav">
        <ul className="nav__list-container">
          <li className="nav__list-item">
            <img className="nav__list-img" src={headphones}></img>
            <p className="nav__list-title">Earphones</p>
            <div className="nav__shop-container">
              <p className="nav__text">shop</p>
              <img className="nav__orange-icon" src={orangeIcon}></img>
            </div>
          </li>
          <li className="nav__list-item">
            <img className="nav__list-img" src={speakers}></img>
            <p className="nav__list-title">Earphones</p>
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
    </>
  );
}
