import "./Checkout.scss";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";

export default function Checkout() {
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
          <div className="checkout__billing-details">
            <p className="checkout__billing-details-title">billing details</p>
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
            <label htmlFor="name" className="checkout__email">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="bilal91@hotmail.com"
              className="checkout__email-input"
            />
            <label htmlFor="name" className="checkout__phone-number">
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
          <div className="checkout__shipping-info">
            <p className="checkout__shipping-title">shipping info</p>
            <label htmlFor="name" className="checkout__address">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="1137 Williams Avenue"
              className="checkout__address-input"
            />
            <label htmlFor="name" className="checkout__zip">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip-code"
              name="zip-code"
              placeholder="10001"
              className="checkout__zip-code-input"
            />
            <label htmlFor="name" className="checkout__city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="New York"
              className="checkout__zip-city-input"
            />
            <label htmlFor="name" className="checkout__country">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="United States"
              className="checkout__country"
            />
          </div>
          <div className="checkout__payment-details">
            <p className="checkout__payment-title">payment details</p>
            <div className="checkout__input-radio">
              <input
                type="radio"
                id="e-money"
                name="e-money"
                className="checkout__e-money-radio"
              />
              <input
                type="text"
                id="e-money"
                name="e-Money"
                placeholder="e-Money"
                className="checkout__e-money-input"
              />
            </div>
            <div className="checkout__input-radio">
              <input
                type="radio"
                id="cash"
                name="cash"
                className="checkout__cash-radio"
              />
              <input
                type="text"
                id="e-money"
                name="e-Money"
                placeholder="Cash on Delivery"
                className="checkout__cash-input"
              />
            </div>
            <div className="checkout__payment-method-info">
              <label htmlFor="name" className="checkout__e-money-title">
                e-Money Number
              </label>
              <input
                type="text"
                id="e-money"
                name="e-Money"
                placeholder="23851226"
                className="checkout__cash-input"
              />
              <label htmlFor="name" className="checkout__e-money-pin">
                e-money PIN
              </label>
              <input
                type="text"
                id="e-money-pin"
                name="e-Money-pin"
                placeholder="9021"
                className="checkout__cash-input"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
