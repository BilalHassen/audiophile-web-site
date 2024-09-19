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
  const [vat, setVat] = useState(0);
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

  const handleScreenSize = () => {
    setScreenSize(handleImageUrl());
  };

  useEffect(() => {
    handleScreenSize();

    const resize = () => {
      handleScreenSize();
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  function formatTotal() {
    let totalAllItems = 0;
    let priceExShipping = 0;

    cartData.forEach((item) => {
      totalAllItems += item.price;
      priceExShipping += item.price;
    });

    let vatAmount = 0.2 * priceExShipping;
    let totalWithShipping = totalAllItems + shipping;
    let totalWithVat = totalWithShipping + vatAmount;

    setVat(formatNumber(vatAmount.toFixed(2)));

    return { totalWithVat, priceExShipping };
  }

  function formatNumber(number) {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }

  function totalWithShipping(amountsObject) {
    let totalWithShipping = amountsObject.totalWithVat;
    setGrandTotal(formatNumber(totalWithShipping));
  }

  function formatTotalExShipping(amountsObject) {
    let totalWithoutShipping = amountsObject.priceExShipping;
    setTotal(formatNumber(totalWithoutShipping));
  }

  // Fetch cart data from the server
  useEffect(() => {
    const getUpdatedCartData = async () => {
      try {
        // Make a GET request to fetch cart items
        const response = await axios.get(
          `http://localhost:8080/cart/getitems/${cart_id}`
        );

        // Check if the response status is OK
        if (response.status === 200) {
          const products_data = response.data;
          setCartData(products_data); // Update state with fetched data
        } else {
          console.error(
            "Unexpected response status from getUpdatedCartData:",
            response
          );
        }
      } catch (error) {
        console.error("Error fetching updated cart data:", error.message);
      }
    };

    getUpdatedCartData(); // Call the function to fetch cart data
  }, [cart_id]);

  useEffect(() => {
    const totalNumber = formatTotal();
    totalWithShipping(totalNumber);
    formatTotalExShipping(totalNumber);
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
