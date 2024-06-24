import "./OrderComplete.scss";
import OrderConfirmation from "../../assets/checkout/icon-order-confirmation.svg";
import { useEffect, useState } from "react";
export default function OrderComplete({ cartData, grandTotal }) {
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState("");

  console.log(cartData[0]);

  useEffect(() => {
    if (cartData.length > 1) {
      setQuantity(cartData.length - 1);
      setItems("items(s)");
    } else {
      setQuantity(1);
      setItems("item");
    }
  }, []);

  return (
    <>
      <section className="order">
        <div className="order__page-container">
          <img
            className="order__confirmation-img"
            src={OrderConfirmation}
          ></img>
          <h1 className="order__title">
            thank you
            <p className="order__subtitle">for your order</p>
          </h1>
          <p className="order__para">
            You will recieve an email confirmation shortly.
          </p>
          <div className="order__boxes-container">
            <div className="order__flex-container">
              <div className="order__items-box">
                <div className="order__first-item-box">
                  <img
                    className="order__first-item-img"
                    src={cartData[0].url_mobile}
                  ></img>
                  <div className="order__item-price-name-wrapper">
                    <h4 className="order__item-name">
                      {cartData[0].item_name}
                    </h4>
                    <p className="order__item-price">$ {cartData[0].price}</p>
                  </div>
                  <p className="order__item-quantity">
                    x{cartData[0].quantity}
                  </p>
                </div>
              </div>

              <div className="order__items-extra">
                and {quantity} other {items}
              </div>
            </div>

            <div className="order__items-total">
              <p className="order__total-title">grand total</p>
              <p className="order__total-value">$ {grandTotal}</p>
            </div>
          </div>
          <div className="order__button-container">
            <button className="order__button">back to home</button>
          </div>
        </div>
      </section>
    </>
  );
}
