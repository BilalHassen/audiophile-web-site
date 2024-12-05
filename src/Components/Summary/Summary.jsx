import { useState, useEffect } from "react";
import "./Summary.scss";
import SummaryItems from "../SummaryItems/SummaryItems";
import axios from "axios";
import OrderComplete from "../OrderComplete/OrderComplete";

// Function to determine screen size based on window width
function handleImageUrl() {
  let width = window.innerWidth;

  if (width < 768) {
    return "mobile";
  }

  if (width >= 768 && width < 1366) {
    return "tablet";
  }

  return "desktop";
}

export default function Summary({ handleErrorSubmission, orderComplete }) {
  // State to hold cart items data
  const [cartData, setCartData] = useState([]);
  // State to manage screen size for responsive design
  const [screenSize, setScreenSize] = useState(handleImageUrl());
  // State to manage shipping cost
  const [shipping] = useState(50); // Shipping cost is constant
  // Cart ID fetched from local storage
  const cart_id = localStorage.getItem("cart_id");
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  // Update screen size state when the window is resized
  const handleScreenSize = () => {
    setScreenSize(handleImageUrl());
  };

  useEffect(() => {
    handleScreenSize(); // Initial setting of screen size

    // Event listener for resizing window
    const resize = () => {
      handleScreenSize();
    };

    window.addEventListener("resize", resize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Function to format a number with commas
  function formatNumber(number) {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }

  // Function to calculate totals based on cart data
  function calculateTotals() {
    let totalAllItems = 0;
    let priceExShipping = 0;

    // Sum up prices of all items in the cart
    cartData.forEach((item) => {
      console.log(typeof item.price);
      totalAllItems += parseFloat(item.price);
      priceExShipping += parseFloat(item.price);
    });

    // Calculate VAT (20% of the price excluding shipping)
    let vatAmount = 0.2 * priceExShipping;
    let totalWithShipping = totalAllItems + shipping;
    let totalWithVat = totalWithShipping + vatAmount;

    // Return formatted totals
    return {
      totalWithVat: formatNumber(totalWithVat.toFixed(2)),
      priceExShipping: formatNumber(priceExShipping.toFixed(2)),
      vat: formatNumber(vatAmount.toFixed(2)),
      grandTotal: formatNumber(totalWithVat.toFixed(2)),
    };
  }

  // Fetch cart data from the server
  useEffect(() => {
    const getUpdatedCartData = async () => {
      try {
        // Make a GET request to fetch cart items
        const response = await axios.get(`${baseURL}/cart/getitems/${cart_id}`);

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
  }, [cart_id]); // Effect depends on cart_id

  // Calculate totals during rendering
  const { totalWithVat, priceExShipping, vat, grandTotal } = calculateTotals();

  return (
    <div className="summary">
      <h1 className="summary__title">Summary</h1>
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
          <p className="summary__total-title">Total</p>
          <p className="summary__total-price">$ {priceExShipping}</p>
        </div>
        <div className="summary__shipping">
          <p className="summary__shipping-title">Shipping</p>
          <p className="summary__shipping-price">$ {shipping}</p>
        </div>
        <div className="summary__vat">
          <p className="summary__vat-title">VAT (included)</p>
          <p className="summary__vat-price">$ {vat}</p>
        </div>
        <div className="summary__grand-total">
          <p className="summary__grand-total-title">Grand Total</p>
          <p className="summary__grand-total-price">$ {grandTotal}</p>
        </div>
      </div>
      <div className="summary__button-container">
        <button onClick={handleErrorSubmission} className="summary__button">
          Continue & Pay
        </button>
      </div>

      {orderComplete ? (
        <OrderComplete grandTotal={grandTotal} cartData={cartData} />
      ) : null}
    </div>
  );
}
