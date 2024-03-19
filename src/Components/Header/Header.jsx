import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import "./Header.scss";
export default function Header() {
  return (
    <>
      <section className="header">
        <FontAwesomeIcon icon={faBars} className="header__icon" />
        <h1 className="header__title">audiophile</h1>
        <img classname="header__cart-icon" src={cartIcon} alt="cart-icon"></img>
      </section>
    </>
  );
}
