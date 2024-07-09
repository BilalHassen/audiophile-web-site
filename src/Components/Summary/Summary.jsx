import { useState, useEffect } from "react";
import "./Summary.scss";
import SummaryItems from "../SummaryItems/SummaryItems";
import axios from "axios";
import OrderComplete from "../OrderComplete/OrderComplete";

export default function Summary({ handleErrorSubmission, orderComplete }) {
  const [cartData, setCartData] = useState([]);
  const [screenSize, setScreenSize] = useState(handleImageUrl());
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [shipping, setShipping] = useState(50);
  const [vat, setvat] = useState(0);
  const cart_id = localStorage.getItem("cart_id");

  console.log(orderComplete);

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

  // get the total amounts in numbers
  function formatTotal() {
    let totalAllItems = 0;
    let priceExShipping = 0;

    // add up each number with price
    cartData.forEach((item) => {
      totalAllItems += item.price;
      priceExShipping += item.price;
    });

    let vatAmount = 0.2 * priceExShipping;
    let totalWithShipping = totalAllItems + shipping;
    let totalWithVat = totalWithShipping + vatAmount;
    vatAmount = vatAmount.toFixed(2);

    setvat(vatAmount);

    console.log(typeof vatAmount);
    console.log(totalWithShipping);

    // return the two seperate values as an object
    return { totalWithVat, priceExShipping };
  }

  console.log(grandTotal.length);

  // function to format the total amount including shipping as a string
  function totalWithShipping(amountsObject) {
    let totalWithShipping = amountsObject.totalWithVat.toString();

    let formattedShippingStr = "";

    if (totalWithShipping.length < 4) {
      formattedShippingStr = totalWithShipping;
    } else if (totalWithShipping.length === 4) {
      formattedShippingStr =
        totalWithShipping.substring(0, 1) + "," + totalWithShipping.slice(1);
    } else if (totalWithShipping.length === 5) {
      formattedShippingStr =
        totalWithShipping.substring(0, 2) + "," + totalWithShipping.slice(2);
    } else if (
      totalWithShipping.length === 6 &&
      // check if the string doesnt include a "." use ! because includes returns true
      !totalWithShipping.includes(".")
    ) {
      formattedShippingStr =
        totalWithShipping.substring(0, 4) + "," + totalWithShipping.slice(3);
    } else if (totalWithShipping.length === 6) {
      formattedShippingStr =
        totalWithShipping.substring(0, 1) +
        "," +
        totalWithShipping.slice(1) +
        "0";
    } else if (
      totalWithShipping.length === 7 &&
      !totalWithShipping.includes(".")
    ) {
      formattedShippingStr =
        totalWithShipping.substring(0, 1) +
        "," +
        totalWithShipping.substring(1, 4) +
        "," +
        totalWithShipping.slice(4);
    } else if (totalWithShipping.length === 7) {
      formattedShippingStr =
        totalWithShipping.substring(0, 2) +
        "," +
        totalWithShipping.substring(2, 5) +
        "." +
        totalWithShipping.slice(6) +
        "0";
    }

    setGrandTotal(formattedShippingStr);
  }

  // function to format the total wihthout shipping as a string
  function formatTotalExShipping(amountsObject) {
    let totalWithoutShipping = amountsObject.priceExShipping.toString();
    console.log(totalWithoutShipping);
    let formattedWithoutShippingStr = "";

    if (totalWithoutShipping.length < 4) {
      formattedWithoutShippingStr = totalWithoutShipping;
    } else if (totalWithoutShipping.length === 4) {
      formattedWithoutShippingStr =
        totalWithoutShipping.substring(0, 1) +
        "," +
        totalWithoutShipping.slice(1);
    } else if (totalWithoutShipping.length === 5) {
      formattedWithoutShippingStr =
        totalWithoutShipping.substring(0, 2) +
        "," +
        totalWithoutShipping.slice(2);
    } else if (totalWithShipping.length === 6) {
      formattedWithoutShippingStr =
        totalWithoutShipping.substring(0, 3) +
        "," +
        totalWithoutShipping.slice(3);
    } else if (totalWithoutShipping.length === 7) {
      formattedWithoutShippingStr =
        totalWithoutShipping.substring(0, 1) +
        "," +
        totalWithoutShipping.substring(1, 4) +
        "," +
        totalWithoutShipping.slice(4);
    }

    setTotal(formattedWithoutShippingStr);
  }

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

  useEffect(() => {
    const totalNumber = formatTotal();
    totalWithShipping(totalNumber);
    formatTotalExShipping(totalNumber);
    console.log(cartData.length);
  }, [cartData]);

  return (
    <>
      <div className="summary">
        <h1 className="summary__title">summary</h1>
        {cartData.map((items, index) => (
          <SummaryItems
            key={items.product_id}
            index={index}
            cart_id={items.cart_id}
            id={items.product_id}
            item_name={items.item_name}
            quantity={items.quantity}
            price={items.price}
            url_mobile={items.url_mobile}
            url_tablet={items.url_tablet}
            url_desktop={items.url_desktop}
          />
        ))}
        <div className="summary__calculations">
          <div className="summary__total">
            <p className="summary__total-title">total</p>
            <p className="summary__total-price">$ {total}</p>
          </div>
          <div className="summary__shipping">
            <p className="summary__shipping-title">shipping</p>
            <p className="summary__shipping-price">$ {shipping}</p>
          </div>
          <div className="summary__vat">
            <p className="summary__vat-title">{`vat (included)`}</p>
            <p className="summary__shipping-price">$ {vat}</p>
          </div>
          <div className="summary__grand-total">
            <p className="summary__grand-total-title">grand total</p>
            <p className="summary__grand-total-price">$ {grandTotal}</p>
          </div>
        </div>
        <div className="summary__button-container">
          <button onClick={handleErrorSubmission} className="summary__button">
            continue & pay
          </button>
        </div>

        {orderComplete ? (
          <OrderComplete grandTotal={grandTotal} cartData={cartData} />
        ) : null}
      </div>
    </>
  );
}
