import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Nav from "../../Components/Nav/Nav";
import { useState, useEffect } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.scss";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  // state for handling modal open and close
  const [isOpen, setModalOpen] = useState(false);

  const storedData = localStorage.getItem("cart_id");
  console.log(storedData);

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
    }
  };

  useEffect(() => {
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);

    // clean up function to remove event listener when not needed
    const cleanUpFunction = () => {
      window.removeEventListener("resize", handleScreenSize);
    };

    return cleanUpFunction;
    // dependency for when window value changes
  }, []);

  const handleNavDisplay = () => {
    setIsActive(!isActive);
  };

  const handleCartModal = () => {
    setModalOpen((prevState) => {
      return !prevState;
    });
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

        <img
          onClick={handleCartModal}
          classname="header__cart-icon"
          src={cartIcon}
          alt="cart-icon"
        ></img>
        {isOpen ? <Cart /> : null}
      </section>
      {isActive ? <Nav /> : ""}
    </>
  );
}
