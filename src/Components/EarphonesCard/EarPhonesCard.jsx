import React from "react";
import "./EarPhonesCard.scss";
import { useEffect, useState } from "react";

export default function EarPhonesCard({
  name,
  description,
  urlMobile,
  urlTablet,
  urlDesktop,
}) {
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const handleEarPhonesSize = () => {
    let currentWidth = window.innerWidth;
    setMobile(currentWidth < 768);
    setTablet(currentWidth >= 768 && currentWidth < 1366);
    setDesktop(currentWidth >= 1366);
  };

  useEffect(() => {
    handleEarPhonesSize();

    window.addEventListener("resize", handleEarPhonesSize);

    const cleanUpFunction = () => {
      return window.removeEventListener("resize", handleEarPhonesSize);
    };

    // function will be executed when component unmounts
    return cleanUpFunction;
  }, []);

  return (
    <>
      <div className={`earphones__card`}>
        <div className="earphones__image-container">
          {isMobile ? (
            <img
              className="earphones__img"
              src={urlMobile}
              alt="earphones image"
            ></img>
          ) : null}
          {isTablet ? (
            <img
              className="earphones__img"
              src={urlTablet}
              alt="earphones image"
            ></img>
          ) : null}
          {isDesktop ? (
            <img
              className="earphones__img"
              src={urlDesktop}
              alt="earphones image"
            ></img>
          ) : null}
        </div>
        <div className="earphones__text-container">
          <h2 className="earphones__new-product">new product</h2>
          <h1 className={`earphones__card-title`}>{name}</h1>
          <p className="earphones__para">{description}</p>
          <div className="earphones__button-container">
            <button className="earphones__button">see product</button>
          </div>
        </div>
      </div>
    </>
  );
}
