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
  return (
    <>
      <div className={`earphones__card`}>
        <div className="earphones__image-container">
          <img
            className="earphones__img"
            src={urlMobile}
            alt="earphones image"
          ></img>
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
