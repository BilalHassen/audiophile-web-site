import "./Checkout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Summary from "../Summary/Summary";
export default function Checkout() {
  const cart_id = localStorage.getItem("cart_id");
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const getUpdatedCartData = async () => {
      let response = await axios.get(
        `http://localhost:8080/cart/getitems/${cart_id}`
      );
      let products_data = response.data;
      console.log(products_data);
      setCartData(products_data);
    };

    getUpdatedCartData();
  }, []);

  console.log(cartData);

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <Header />
      <div className="checkout">
        <button className="checkout__direction" onClick={goBack}>
          Go Back
        </button>
        <div className="checkout__form">
          <h1 className="checkout__title">checkout</h1>
          <p className="checkout__billing-details-title">billing details</p>
          <div className="checkout__billing-details">
            <div className="checkout__name-box">
              <label htmlFor="name" className="checkout__name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Bilal Hassen"
                className="checkout__name-input"
              />
            </div>
            <div className="checkout__email-box">
              <label htmlFor="email" className="checkout__email">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="bilal91@hotmail.com"
                className="checkout__email-input"
              />
            </div>
            <div className="checkout__number-box">
              <label htmlFor="number" className="checkout__phone-number">
                Phone Number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="+1 202-555-0136"
                className="checkout__number-input"
              />
            </div>
          </div>

          {/* Shipping Info */}
          <p className="checkout__shipping-title">shipping info</p>
          <div className="checkout__shipping-info">
            <div className="checkout__address-box">
              <label htmlFor="address" className="checkout__address">
                Your Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="1137 Williams Avenue"
                className="checkout__address-input"
              />
            </div>
            <div className="checkout__zip-box">
              <label htmlFor="zip-code" className="checkout__zip">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip-code"
                name="zip-code"
                placeholder="10001"
                className="checkout__zip-code-input"
              />
            </div>
            <div className="checkout__city-box">
              <label htmlFor="city" className="checkout__city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="New York"
                className="checkout__city-input"
              />
            </div>
            <div className="checkout__country-box">
              <label htmlFor="country" className="checkout__country">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="United States"
                className="checkout__country-input"
              />
            </div>
          </div>

          {/* Payment Info */}
          <p className="checkout__payment-title">payment details</p>
          <p className="checkout__payment-text">Payment Method</p>
          <div className="checkout__payment-details">
            <div className="checkout__radio-wrapper">
              <div className="checkout__input-radio">
                <input
                  type="radio"
                  id="e-money"
                  name="payment-method"
                  className="checkout__e-money-radio"
                />
                <label htmlFor="e-money" className="checkout__e-money-input">
                  e-Money
                </label>
              </div>
              <div className="checkout__input-radio">
                <input
                  type="radio"
                  id="cash"
                  name="payment-method"
                  className="checkout__cash-radio"
                />
                <label htmlFor="cash" className="checkout__cash-input">
                  Cash on Delivery
                </label>
              </div>
            </div>
            <div className="checkout__payment-method-info">
              <div className="checkout__e-money-box">
                <label
                  htmlFor="e-money-number"
                  className="checkout__e-money-title"
                >
                  e-Money Number
                </label>
                <input
                  type="text"
                  id="e-money-number"
                  name="e-money-number"
                  placeholder="23851226"
                  className="checkout__e-money-number"
                />
              </div>
              <div className="checkout__e-money-pin-box">
                <label htmlFor="e-money-pin" className="checkout__e-money-pin">
                  e-Money PIN
                </label>
                <input
                  type="text"
                  id="e-money-pin"
                  name="e-money-pin"
                  placeholder="9021"
                  className="checkout__e-money-pin"
                />
              </div>
            </div>
          </div>
        </div>
        <Summary cartData={cartData} />
      </div>
      <Footer />
    </>
  );
}
