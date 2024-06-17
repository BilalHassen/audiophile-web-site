import "./Checkout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Summary from "../Summary/Summary";

export default function Checkout() {
  const cart_id = localStorage.getItem("cart_id");
  const [cartData, setCartData] = useState([]);
  const [ischeckoutPage, setCheckOutPage] = useState(true);
  const [errors, setErrors] = useState({});
  // state for successful checkout
  const [orderComplete, setOrderComplete] = useState(false);

  // state for form inputs
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNum: "",
    eMoneyPin: "",
  });

  // function to handle form inputs
  const handleForm = (e) => {
    const { name, value, type } = e.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const formErrors = validateForm(values);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    }
  };

  const handleErrorSubmission = () => {
    const formErrors = validateForm(values);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setOrderComplete(true);
    }
  };

  console.log(errors);
  const validateForm = (formValues) => {
    // object to store error values
    let errors = {};
    if (!formValues.name) {
      errors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = "Enter a valid email";
    }

    if (!formValues.phone) {
      errors.phone = "Please enter phone number";
    }

    if (!formValues.address) {
      errors.address = "Please enter address";
    }

    if (!formValues.zip) {
      errors.zip = "Zip is required";
    } else if (formValues.zip.includes(!"-")) {
      errors.zip = "please enter a correct zip";
    }

    if (!formValues.city) {
      errors.city = "Please enter City";
    }

    if (!formValues.country) {
      errors.country = "Please enter Country";
    }

    if (formValues.paymentMethod === "e-money") {
      if (!formValues.eMoneyNum) {
        errors.eMoney = "Please enter e-Money Number";
      }
      if (
        !formValues.eMoneyPin ||
        formValues.eMoneyPin.length < 3 ||
        formValues.eMoneyPin.length > 4
      ) {
        errors.eMoneyPin = "please enter e-Money PIN";
      }
    }

    if (!formValues.paymentMethod) {
      errors.paymentMethod = "please select a Payment Method";
    }

    console.log(formValues.eMoneyPin.length);
    // console.log(errors);

    return errors;
  };

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
        <form className="checkout__form">
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
                value={values.name}
                onChange={handleForm}
                placeholder="Bilal Hassen"
                className="checkout__name-input"
              />
              <p className="checkout__error-paragraph">
                {errors ? errors.name : null}
              </p>
            </div>
            <div className="checkout__email-box">
              <label htmlFor="email" className="checkout__email">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email}
                onChange={handleForm}
                placeholder="bilal91@hotmail.com"
                className="checkout__email-input"
              />
              <p className="checkout__error-paragraph">
                {errors ? errors.email : null}
              </p>
            </div>
            <div className="checkout__number-box">
              <label htmlFor="number" className="checkout__phone-number">
                Phone Number
              </label>
              <input
                type="text"
                id="number"
                name="phone"
                value={values.phone}
                onChange={handleForm}
                placeholder="+1 202-555-0136"
                className="checkout__number-input"
              />
              <p className="checkout__error-paragraph">
                {errors ? errors.phone : null}
              </p>
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
                value={values.address}
                onChange={handleForm}
                placeholder="1137 Williams Avenue"
                className="checkout__address-input"
              />
              <p className="checkout__error-paragraph">
                {errors ? errors.address : null}
              </p>
            </div>
            <div className="checkout__zip-box">
              <label htmlFor="zip-code" className="checkout__zip">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip-code"
                name="zip"
                value={values.zip}
                onChange={handleForm}
                placeholder="10001"
                className="checkout__zip-code-input"
              />
            </div>
            <p className="checkout__error-paragraph">
              {errors ? errors.zip : null}
            </p>
            <div className="checkout__city-box">
              <label htmlFor="city" className="checkout__city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={values.city}
                onChange={handleForm}
                placeholder="New York"
                className="checkout__city-input"
              />
              <p className="checkout__error-paragraph">
                {errors ? errors.city : null}
              </p>
            </div>
            <div className="checkout__country-box">
              <label htmlFor="country" className="checkout__country">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={values.country}
                onChange={handleForm}
                placeholder="United States"
                className="checkout__country-input"
              />
            </div>
            <p className="checkout__error-paragraph">
              {errors ? errors.country : null}
            </p>
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
                  name="paymentMethod"
                  value="e-money"
                  checked={values.paymentMethod === "e-money"}
                  onChange={handleForm}
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
                  name="paymentMethod"
                  value="cash"
                  checked={values.paymentMethod === "cash"}
                  onChange={handleForm}
                  className="checkout__cash-radio"
                />
                <label htmlFor="cash" className="checkout__cash-input">
                  Cash on Delivery
                </label>
              </div>
              <p className="checkout__error-paragraph">
                {errors ? errors.paymentMethod : null}
              </p>
            </div>
            <div className="checkout__payment-method-info">
              {values.paymentMethod === "e-money" && (
                <>
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
                      name="eMoneyNum"
                      value={values.eMoneyNum}
                      onChange={handleForm}
                      placeholder="23851226"
                      className="checkout__e-money-number"
                    />
                  </div>
                  <div className="checkout__e-money-pin-box">
                    <label
                      htmlFor="e-money-pin"
                      className="checkout__e-money-pin"
                    >
                      e-Money PIN
                    </label>
                    <input
                      type="text"
                      id="e-money-pin"
                      name="eMoneyPin"
                      value={values.eMoneyPin}
                      onChange={handleForm}
                      placeholder="9021"
                      className="checkout__e-money-pin"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </form>
        <Summary
          handleErrorSubmission={handleErrorSubmission}
          errors={errors}
          orderComplete={orderComplete}
        />
      </div>
      <Footer />
    </>
  );
}
