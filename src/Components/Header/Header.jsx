import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Nav from "../../Components/Nav/Nav";
import { useState, useEffect } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.scss";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const handleScreenSize = () => {
    if (window.innerWidth >= 768) {
      setTablet(true);
    } else if (window.innerWidth <= 767) {
      setTablet(false);
    }

    if (window.innerWidth >= 1366) {
      setDesktop(true);
    } else if (window.innerWidth < 1366) {
      setDesktop(false);
      console.log(window.innerWidth);
    }
  };

  useEffect(() => {
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);
    console.log(window.innerWidth, isDesktop);

    // clean up function to remove event listener when not needed
    const cleanUpFunction = () => {
      window.removeEventListener("resize", handleScreenSize);
    };

    return cleanUpFunction;
    // dependency for when window value changes
  }, [handleScreenSize]);

  const handleNavDisplay = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className="header">
        {isTablet ? (
          <div className="header__tablet-wrapper">
            <FontAwesomeIcon
              icon={faBars}
              className="header__icon"
              onClick={handleNavDisplay}
            />
            <h1 className="header__title">audiophile</h1>
          </div>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faBars}
              className="header__icon"
              onClick={handleNavDisplay}
            />
            <h1 className="header__title">audiophile</h1>
          </>
        )}
        {isDesktop ? <HeaderNav /> : null}
        <img classname="header__cart-icon" src={cartIcon} alt="cart-icon"></img>
      </section>
      {isActive ? <Nav /> : ""}
    </>
  );
}
