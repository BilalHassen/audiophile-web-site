import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Nav from "../../Components/Nav/Nav";
import { useState } from "react";
import "./Header.scss";
export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleNavDisplay = () => {
    setIsActive(!isActive);
  };

  console.log(isActive);

  return (
    <>
      <section className="header">
        <FontAwesomeIcon
          icon={faBars}
          className="header__icon"
          onClick={handleNavDisplay}
        />
        <h1 className="header__title">audiophile</h1>
        <img classname="header__cart-icon" src={cartIcon} alt="cart-icon"></img>
      </section>
      {isActive ? <Nav /> : ""}
    </>
  );
}
