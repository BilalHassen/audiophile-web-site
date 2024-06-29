import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Nav from "../../Components/Nav/Nav";
import { useState, useEffect, useRef } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.scss";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import logo from "../../assets/shared/desktop/logo.svg";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  // state for handling modal open and close
  const [isOpen, setModalOpen] = useState(false);

  const storedData = localStorage.getItem("cart_id");

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

  const handleCartModal = (e) => {
    // stop the cart icon listener from travelling up and triggering the
    // the event listener on the document
    e.stopPropagation();
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
            <Link to="/">
              <img className="header__title" src={logo} alt="logo"></img>
            </Link>
          </div>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faBars}
              className="header__icon"
              onClick={() => {
                handleNavDisplay();
              }}
            />
            <Link to="/">
              <img className="header__title" src={logo} alt="logo"></img>
            </Link>
          </>
        )}
        {isDesktop ? <HeaderNav /> : null}

        <img
          onClick={handleCartModal}
          className="header__cart-icon"
          src={cartIcon}
          alt="cart-icon"
        ></img>
        {isOpen ? <Cart handleCartModal={handleCartModal} /> : null}
      </section>
      {isActive ? <Nav /> : ""}
    </>
  );
}
