import { useState, useEffect } from "react";
import "./Summary.scss";
import SummaryItems from "../SummaryItems/SummaryItems";
import axios from "axios";
export default function Summary({ cartData }) {
  const [screenSize, setScreenSize] = useState(handleImageUrl());
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [shipping, setShipping] = useState(50);
  const [vat, setvat] = useState();
  const cart_id = localStorage.getItem("cart_id");

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

  useEffect(() => {
    function formatTotal() {
      let totalAllItems = 0;
      let priceExShipping = 0;

      cartData.forEach((item) => {
        totalAllItems += item.price;
        priceExShipping += item.price;
      });

      let totalWithShipping = (totalAllItems += shipping);

      setvat(0.2 * priceExShipping);

      // return the two seperate values as an object
      return { totalWithShipping, priceExShipping };
    }

    function formatTotalStr(totalAmount) {
      let totalAmountStr = totalAmount.totalWithShipping.toString();
      let amountExShipping = totalAmount.priceExShipping.toString();
      let formattedTotalStr = "";
      let formattedTotalExShipping = "";

      console.log(typeof amountExShipping);

      if (totalAmountStr.length < 4) {
        formattedTotalStr = totalAmountStr;
        formattedTotalExShipping = amountExShipping;
      } else if (totalAmountStr.length === 4) {
        console.log("if");
        formattedTotalStr =
          totalAmountStr.substring(0, 1) + "," + totalAmountStr.slice(1);

        formattedTotalExShipping =
          amountExShipping.substring(0, 1) + "," + amountExShipping.slice(1);
      } else if (totalAmountStr.length === 5) {
        formattedTotalStr =
          totalAmountStr.substring(0, 2) + "," + totalAmountStr.slice(2);

        formattedTotalExShipping =
          amountExShipping.substring(0, 2) + "," + amountExShipping.slice(2);
      } else if (totalAmountStr.length === 6) {
        formattedTotalStr =
          totalAmountStr.substring(0, 3) + "," + totalAmountStr.slice(3);

        formattedTotalExShipping =
          amountExShipping.substring(0, 3) + "," + amountExShipping.slice(3);
      } else if (totalAmountStr.length === 7) {
        formattedTotalStr =
          totalAmountStr.substring(0, 1) +
          "," +
          totalAmountStr.substring(1, 4) +
          "," +
          totalAmountStr.slice(4);

        formattedTotalExShipping =
          amountExShipping.substring(0, 1) +
          "," +
          amountExShipping.substring(1, 4) +
          "," +
          amountExShipping.slice(4);
      }

      console.log(formattedTotalExShipping);
      setTotal(formattedTotalExShipping);
      setGrandTotal(formattedTotalStr);
    }
    const totalNumber = formatTotal();
    console.log(totalNumber);

    formatTotalStr(totalNumber);
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
          <button className="summary__button">continue & pay</button>
        </div>
      </div>
    </>
  );
}
