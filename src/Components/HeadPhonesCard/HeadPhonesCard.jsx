import React from "react";
import "./HeadPhonesCard.scss";

export default function HeadPhonesCard({
  id,
  name,
  description,
  urlMobile,
  urlTablet,
  urlDesktop,
  console,
}) {
  return (
    <div className="headphones__card">
      <div className="headphones__image-container">
        <img
          className="headphones__img"
          src={urlMobile}
          alt="headphones image"
        ></img>
      </div>
      <h1 className="headphones__card-title">{name}</h1>
      <p className="headphones__para">{description}</p>
      <button className="headphones__button">View Details</button>
    </div>
  );
}
