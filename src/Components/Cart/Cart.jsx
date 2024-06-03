import { useParams } from "react-router-dom";
import "./Cart.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import CartItems from "../CartItems/CartItems";

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const card_id = localStorage.getItem("cart_id");

  useEffect(() => {
    const getCartData = async () => {
      let response = await axios.get(
        `http://localhost:8080/cart/getitems/${card_id}`
      );
      let products_data = response.data;
      setCartData(products_data);
    };
    getCartData();
  }, []);

  console.log("dynamic data:", cartData);

  useEffect(() => {
    let totalAmount = 0;

    for (let i = 0; i < cartData.length; i++) {
      totalAmount = totalAmount += cartData[i].price;
    }

    setTotal(totalAmount);
  }, [cartData]);

  console.log(total);

  function formatTotal(total) {
    let totalStr = total.toString();

    if (totalStr.length <= 4 && totalStr.length > 3) {
      console.log("first if");
      return totalStr[0] + "," + totalStr.slice(1);
    } else if (totalStr.length >= 5) {
      return totalStr[0] + totalStr[1] + "," + totalStr.slice(2);
    }

    return totalStr;
  }

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__text-container">
          <h3 className="cart__count">cart ({cartData.length})</h3>
          <button className="cart__remove-button">Remove all</button>
        </div>
        <div className="cart__items-wrapper">
          {cartData.map((items) => (
            <CartItems
              item_name={items.item_name}
              quantity={items.quantity}
              price={items.price}
              url_mobile={items.url_mobile}
              url_tablet={items.url_tablet}
              url_desktop={items.url_desktop}
            />
          ))}
        </div>
        <div className="cart__text-container-2">
          <p className="cart__total">total</p>
          <p className="cart__total-amount">${formatTotal(total)}</p>
        </div>
        <div className="cart__checkout-button">checkout</div>
      </div>
    </div>
  );
}
