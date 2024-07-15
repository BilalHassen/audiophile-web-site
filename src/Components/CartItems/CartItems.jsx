import "./CartItems.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CartItems({
  index,
  cart_id,
  getUpdatedCartData,
  id,
  item_name,
  quantity,
  price,
  url_mobile,
  url_tablet,
  url_desktop,
}) {
  const [screenSize, setScreenSize] = useState(handleImageUrl());

  const [itemQuantity, setItemQuantity] = useState(quantity);

  // url for adding item to cart
  const cartUrl = `http://localhost:8080/cart/updateitem/${id}`;

  const CART_KEY = "cart_id";
  let localId = "";

  const getLocalId = () => {
    localId = localStorage.getItem(CART_KEY);
    return localId;
  };

  const updateItemsInCart = async (Quantity) => {
    const productCartData = {
      id: parseInt(id),
      product_id: parseInt(id),
      quantity: Quantity,
      price: price,
    };

    try {
      let response = await axios.put(cartUrl, productCartData);
      getUpdatedCartData();
    } catch (error) {
      console.log("error updating cart:", error);
    }
  };

  const addProduct = () => {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const deleteProduct = () => {
    setItemQuantity((prevQuantity) => {
      console.log(prevQuantity);
      let newQuantity = prevQuantity - 1;
      console.log(newQuantity);
      if (newQuantity === 0) {
        return 0;
      } else {
        return newQuantity;
      }
    });
  };

  useEffect(() => {
    if (itemQuantity !== quantity) {
      updateItemsInCart(itemQuantity);
    }
  }, [itemQuantity]);

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

  function formatNumber(number) {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
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
            <p className="cart__item-price">$ {formatNumber(price)}</p>
          </div>
          <div className="cart__controller-container">
            <button className="cart__delete" onClick={deleteProduct}>
              -
            </button>
            <p className="cart__number">{itemQuantity}</p>
            <button className="cart__add" onClick={addProduct}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
