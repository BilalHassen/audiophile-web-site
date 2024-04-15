import React from "react";
import "./HeadPhonesCard.scss";
import { useEffect, useState } from "react";

export default function HeadPhonesCard({
  id,
  name,
  description,
  urlMobile,
  urlTablet,
  urlDesktop,
  newProduct,
  thirdClass,
}) {
  const [isMobile, setMobile] = useState(true);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const handleScreenSize = () => {
    if (window.innerWidth >= 768) {
      setTablet(true);
      setMobile(false);
    } else if (window.innerWidth <= 767) {
      setTablet(false);
      setMobile(true);
    }

    if (window.innerWidth >= 1366) {
      setDesktop(true);
      setTablet(false);
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

  return (
    <div className="headphones__card">
      <div className="headphones__image-container">
        {isMobile ? (
          <img
            className="headphones__img"
            src={urlMobile}
            alt="headphones image"
          ></img>
        ) : null}

        {isTablet ? (
          <img
            className="headphones__img"
            src={urlTablet}
            alt="headphones image"
          ></img>
        ) : null}

        {isDesktop ? (
          <img
            className="headphones__img"
            src={urlDesktop}
            alt="headphones image"
          ></img>
        ) : null}
      </div>
      <div className="text-container">
        <h2 className="headphones__new-product">{newProduct}</h2>
        <h1 className={`headphones__card-title ${thirdClass}`}>{name}</h1>
        <p className="headphones__para">{description}</p>
        <div className="headphones__button-container">
          <button className="headphones__button">see product</button>
        </div>
      </div>
    </div>
  );
}
