import React from "react";
import "./HeadPhonesCard.scss";

export default function HeadPhonesCard({
  id,
  name,
  description,
  urlMobile,
  urlTablet,
  urlDesktop,
  newProduct,
}) {
  return (
    <div className="headphones__card">
      <div className="headphones__image-container">
        <img
          className="headphones__img"
          src={urlMobile}
          alt="headphones image"
        ></img>
        <h2 className="headphones__new-product">{newProduct}</h2>
      </div>
      <h1 className="headphones__card-title">{name}</h1>
      <p className="headphones__para">{description}</p>
      <div className="headphones__button-container">
        <button className="headphones__button">see product</button>
      </div>
    </div>
  );
}
