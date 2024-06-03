import "./CartItems.scss";
import { useState, useEffect } from "react";

export default function CartItems({
  item_name,
  quantity,
  price,
  url_mobile,
  url_tablet,
  url_desktop,
}) {
  const [screenSize, setScreenSize] = useState(handleImageUrl());

  function handleImageUrl() {
    let width = window.innerWidth;

    if (width < 768) {
      return "mobile";
    }

    if (width >= 768 && width < 1366) {
      return "tablet";
    }

    if (width >= 1366) {
      return "desktop";
    }
  }

  // update the screensize state with the returned value from handleImageUrl
  const handleScreenSize = () => {
    // update screenSize variable with value returned from handleImageUrl
    setScreenSize(handleImageUrl());
  };

  useEffect(() => {
    // update screen size when component mounts
    handleScreenSize();

    const resize = () => {
      handleScreenSize();
    };

    // add event listener to window
    window.addEventListener("resize", resize);

    // clean up function
    const removeEventListener = () => {
      return window.removeEventListener("resize", resize);
    };

    return removeEventListener;
  }, []);

  // function for formatting string with comma
  function formatPrice(price) {
    let priceStr = price.toString();

    if (priceStr.length >= 4) {
      return priceStr[0] + "," + priceStr.slice(1);
    }
    return priceStr;
  }

  return (
    <>
      <div className="cart__item-container">
        <div
          className="cart__image-container"
          style={{
            backgroundImage: `url(${
              screenSize === "mobile"
                ? url_mobile
                : screenSize === "tablet"
                ? url_tablet
                : url_desktop
            })`,
          }}
        ></div>
        <div className="cart__dynamic-wrapper">
          <div className="cart__name-price-container">
            <h4 className="cart__item-name">{item_name}</h4>
            <p className="cart__item-price">$ {formatPrice(price)}</p>
          </div>
          <div className="cart__controller-container">
            <button className="cart__delete">-</button>
            <p className="cart__number">{quantity}</p>
            <button className="cart__add">+</button>
          </div>
        </div>
      </div>
    </>
  );
}
