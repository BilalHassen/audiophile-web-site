import { useParams } from "react-router-dom";
import "./Cart.scss";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CartItems from "../CartItems/CartItems";

export default function Cart({ closeModal, handleCartModal }) {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [allItems, setAllItems] = useState(0);
  const cart_id = localStorage.getItem("cart_id");

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

  useEffect(() => {
    getCartData();
  }, []);

  // calculation of the total amount of items when ever the state of cart Data changes
  useEffect(() => {
    let totalAmount = 0;
    let totalCartItems = 0;
    for (let i = 0; i < cartData.length; i++) {
      console.log(cartData[i].quantity);
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
          <button className="cart__remove-button">Remove all</button>
        </div>
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
        <div className="cart__text-container-2">
          <p className="cart__total">total</p>
          <p className="cart__total-amount">${formatTotal(total)}</p>
        </div>
        <div className="cart__checkout-button">checkout</div>
      </div>
    </div>
  );
}
