import { useParams } from "react-router-dom";
import "./Cart.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [cardData, setCardData] = useState([]);
  const card_id = localStorage.getItem("cart_id");

  useEffect(() => {
    const getCartData = async () => {
      let response = await axios.get(
        `http://localhost:8080/cart/getitems/${card_id}`
      );
      let products_data = response.data;
      setCardData(products_data);
    };
    getCartData();
  }, []);

  console.log("dynamic data:", cardData);

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__text-container">
          <h3 className="cart__count">{}</h3>
          <button className="cart__remove-button">Remove all</button>
        </div>
        <div className="card__text-container-2">
          <p className="card__total">total</p>
          <p className="card__total-amount">{}</p>
        </div>
      </div>
    </div>
  );
}
