import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Nav from "../../Components/Nav/Nav";
import { useState, useEffect } from "react";
import "./Header.scss";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const handleTabletSize = () => {
    if (window.innerWidth >= 768) {
      setTablet(true);
    } else if (window.innerWidth <= 767) {
      setTablet(false);
    } else if (window.innerWidth >= 1366) {
      setDesktop(true);
      if (window.innerWidth < 1366) {
        setDesktop(false);
      }
    }
  };

  // const handleDesktopNav = () => {
  //   if (window.innerWidth >= 1366) {
  //     setDesktop(true);
  //   } else {
  //     setDesktop(false);
  //   }
  // };

  useEffect(() => {
    handleTabletSize();

    window.addEventListener("resize", handleTabletSize);
  }, [handleTabletSize]);

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

        <img classname="header__cart-icon" src={cartIcon} alt="cart-icon"></img>
      </section>
      {isActive ? <Nav /> : ""}
      {isDesktop ? <h1>hello</h1> : ""}
    </>
  );
}
