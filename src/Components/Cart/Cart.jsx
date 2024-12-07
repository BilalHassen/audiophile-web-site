import { useParams, Link } from "react-router-dom";
import "./Cart.scss";
import "../Header/Header.scss";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CartItems from "../CartItems/CartItems";
import emptyCart from "../../assets/cart/empty-cart.png";
import Checkout from "../Checkout/Checkout";

export default function Cart({ closeModal, handleCartModal }) {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [allItems, setAllItems] = useState(0);
  const cart_id = localStorage.getItem("cart_id");
  const [isCheckout, setIsCheckout] = useState(true);

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  // create a reference to the cart__container element
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      // check if the click happened within the cart__container
      if (!cartRef.current.contains(e.target)) {
        handleCartModal(e);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const isCartEmpty = () => {
    setIsCheckout(cartData.length > 0);
  };

  useEffect(() => {
    isCartEmpty();
  }, [cartData]);

  // Function to get cart data from the server
  const getCartData = async () => {
    try {
      const response = await axios.get(`${baseURL}/cart/${cart_id}/items`);
      if (response.status === 200 && Array.isArray(response.data)) {
        setCartData(response.data);
      } else {
        console.error(
          "Unexpected response format or status from getCartData:",
          response
        );
      }
    } catch (error) {
      console.error("Error fetching cart data:", error.message);
    }
  };

  // Function to update the cart data
  const getUpdatedCartData = async () => {
    try {
      const response = await axios.get(`${baseURL}/cart/${cart_id}/items`);
      if (response.status === 200 && Array.isArray(response.data)) {
        setCartData(response.data);
      } else {
        console.error(
          "Unexpected response format or status from getUpdatedCartData:",
          response
        );
      }
    } catch (error) {
      console.error("Error fetching updated cart data:", error.message);
    }
  };

  // Function to delete all items in the cart
  const deleteAllItems = async () => {
    try {
      const response = await axios.delete(`${baseURL}/cart/${cart_id}/items`);
      if (response.status === 200) {
        await getCartData(); // Refresh cart data after deletion
        return true;
      } else {
        console.error(
          "Unexpected response format or status from deleteAllItems:",
          response
        );
        return false;
      }
    } catch (error) {
      console.error("Failed to delete items in cart:", error.message);
      return false;
    }
  };

  // Redirect to home if the cart is cleared and the current path is '/checkout'
  const redirect = async () => {
    const clearCart = await deleteAllItems();

    if (clearCart && window.location.pathname === "/checkout") {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    getCartData();
    isCartEmpty();
  }, []);

  useEffect(() => {
    let totalAmount = 0;
    let totalCartItems = 0;
    for (let i = 0; i < cartData.length; i++) {
      totalCartItems += cartData[i].quantity;
      totalAmount += cartData[i].price;
    }
    setAllItems(totalCartItems);
    setTotal(totalAmount);
  }, [cartData]);

  // Function to format the total amount with commas
  function formatNumber(number) {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }

  return (
    <div className="cart">
      {/* Attach the reference to the element */}
      <div className="cart__container" ref={cartRef}>
        <div className="cart__text-container">
          <h3 className="cart__count">cart ({allItems})</h3>
          <button
            className="cart__remove-button"
            onClick={async () => {
              await deleteAllItems();
              await redirect();
              isCartEmpty();
            }}
          >
            Remove all
          </button>
        </div>
        {cartData.length === 0 ? (
          <div className="cart__empty">
            <img
              className="cart__empty-image"
              src={emptyCart}
              alt="empty cart image"
            ></img>
            <h2 className="cart__empty-title">Your Cart Is Empty</h2>
            <p className="cart__empty-text">
              Looks like you haven't made your choice yet...
            </p>
          </div>
        ) : (
          <div className="cart__items-wrapper">
            {cartData.map((items, index) => (
              <CartItems
                key={items.product_id}
                getUpdatedCartData={getUpdatedCartData}
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
          </div>
        )}
        <div className="cart__text-container-2">
          <p className="cart__total">total</p>
          <p className="cart__total-amount">${formatNumber(total)}</p>
        </div>
        {isCheckout ? (
          <Link to="/checkout">
            <div className="cart__checkout-button" onClick={isCartEmpty}>
              checkout
            </div>
          </Link>
        ) : (
          <div className="cart__checkout-button">checkout</div>
        )}
      </div>
    </div>
  );
}
