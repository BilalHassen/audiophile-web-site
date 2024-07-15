import { useEffect, useState } from "react";
import "./ProductCard.scss";
import ProductIncludes from "../ProductIncludes/ProductIncludes";
import ProductGallery from "../ProductGallery/ProductGallery";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import Footer from "../Footer/Footer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function ProductCard({
  id,
  name,
  description,
  features,
  includes,
  price,
  urlMobile,
  urlTablet,
  urlDesktop,
  imageData,
  handleRelatedProduct,
}) {
  const cartUrl = `http://localhost:8080/cart/additem/${id}`;

  let featuresSplit = features.split("\n\n");
  let featuresParaOne = featuresSplit[0];
  let featuresParaTwo = featuresSplit[1];

  const [is_new, setIsNew] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // functions for adding and deleting products
  const addProduct = () => {
    setQuantity(quantity + 1);
  };

  const deleteProduct = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else if (quantity === 0) {
      setQuantity(0);
    }
  };

  useEffect(() => {
    const isNew = () => {
      setIsNew(id === "1" || id === "2" || id === "6");
    };
    isNew();
    setIdInLocalStorage();
  }, []);

  const CART_KEY = "cart_id";
  let localId = "";

  const setIdInLocalStorage = () => {
    let cardId = localStorage.getItem(CART_KEY);
    if (!cardId) {
      cardId = uuidv4();
      localStorage.setItem(CART_KEY, cardId);
    }
  };

  const getLocalId = () => {
    localId = localStorage.getItem(CART_KEY);
    return localId;
  };

  getLocalId();

  const productCartData = {
    id: parseInt(id),
    product_id: parseInt(id),
    quantity: quantity,
    price: price,
    name: name,
    cart_id: getLocalId(),
  };

  function addToCart() {
    if (quantity === 0) {
      alert("Please Select Item");
      return;
    } else if (quantity >= 1) {
      axios.post(cartUrl, productCartData);
      setQuantity(0);
      alert("item added");
    }
  }

  return (
    <>
      <div className="product__card">
        <div className="product__flex-container">
          <div className="product__img-container">
            <img className="product__img main" src={urlMobile}></img>
          </div>
          <div className="product__details-wrapper">
            {is_new ? (
              <h2 className={is_new ? "product__new-product" : null}>
                {" "}
                new product
              </h2>
            ) : null}

            <h1 className="product__title">{name}</h1>
            <p className="product__description">{description}.</p>
            <p className="product__price">$ {price}</p>
            <div className="product__add-delete">
              <div className="product__controller-container">
                <button className="product__delete" onClick={deleteProduct}>
                  -
                </button>
                <p className="product__number">{quantity}</p>
                <button className="product__add" onClick={addProduct}>
                  +
                </button>
              </div>
              <button className="product__button" onClick={addToCart}>
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="product__features-flex-container">
          <div className="product__features-wrapper">
            <h3 className="product__features-title">features</h3>
            <div className="product__features-container">
              <p className="product__features">{featuresParaOne}</p>
              <p className="product__features">{featuresParaTwo}</p>
            </div>
          </div>

          <div className="product__includes-container">
            <h3 className="product__quantity-title">In the box</h3>
            <div className="product__includes-wrapper">
              {includes.map((data, index) => (
                <div className="product__includes-container">
                  <ProductIncludes
                    quantity={data.quantity}
                    item={data.item}
                    id={id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product__gallery">
          <ProductGallery imageData={imageData} id={id} />
        </div>

        <h3 className="product__related-title">you may also like</h3>
        <div className="product__related">
          <RelatedProducts
            productId={id}
            handleRelatedProduct={handleRelatedProduct}
          />
        </div>
      </div>
      <AudiophileDescription />
      <Footer />
    </>
  );
}
