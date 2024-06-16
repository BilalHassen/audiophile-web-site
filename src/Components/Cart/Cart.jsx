import { useParams, Link } from "react-router-dom";
import "./Cart.scss";
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

  function goBack() {
    window.history.back();
  }

  const isCartEmpty = () => {
    if (cartData.length > 0) {
      setIsCheckout(true);
    }
    if (cartData.length === 0) {
      setIsCheckout(false);
    }
  };

  console.log(window.location.pathname === "/checkout");

  useEffect(() => {
    isCartEmpty();
  }, [cartData]);

  // get cart data add from the product cards// original cart data
  const getCartData = async () => {
    let response = await axios.get(
      `http://localhost:8080/cart/getitems/${cart_id}`
    );
    let products_data = response.data;

    setCartData(products_data);
  };

  // this will update the state of the cart data
  // with any data added within the cart
  const getUpdatedCartData = async () => {
    let response = await axios.get(
      `http://localhost:8080/cart/getitems/${cart_id}`
    );
    let products_data = response.data;
    console.log(products_data);
    setCartData(products_data);
  };

  // function to delete all items in cart
  const deleteAllItems = async () => {
    try {
      let response = await axios.delete(
        `http://localhost:8080/cart/deleteitems/${cart_id}`
      );
      getCartData();
      return true;
    } catch (error) {
      console.log("failed to delete items in cart", error);
    }
  };

  const redirect = async () => {
    const clearCart = await deleteAllItems();

    console.log(clearCart);
    console.log(isCheckout);
    if (clearCart === true && window.location.pathname === "/checkout") {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    getCartData();
    isCartEmpty();
  }, []);

  // useEffect(() => {
  //   if (cartData.length === 0 && isCheckout === false) {
  //     redirect();
  //   }
  // }, []);

  // calculation of the total amount of items when ever the state of cart Data changes
  useEffect(() => {
    let totalAmount = 0;
    let totalCartItems = 0;
    for (let i = 0; i < cartData.length; i++) {
      totalCartItems = totalCartItems += cartData[i].quantity;
      totalAmount = totalAmount += cartData[i].price;
    }
    setAllItems(totalCartItems);
    setTotal(totalAmount);
  }, [cartData]);

  // function to format the total amoutn with the comma at the correct place
  function formatTotal(total) {
    let totalStr = total.toString();

    if (totalStr.length <= 4 && totalStr.length > 3) {
      return totalStr[0] + "," + totalStr.slice(1);
    } else if (totalStr.length >= 5) {
      return totalStr[0] + totalStr[1] + "," + totalStr.slice(2);
    }

    return totalStr;
  }

  return (
    <div className="cart">
      {/*attach the reference to the element */}
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
                //function for updating cardData state
                key={items.product_id}
                // pass the update cart function down child component will call function
                // allowing the passed props to be updated
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
          <p className="cart__total-amount">${formatTotal(total)}</p>
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
