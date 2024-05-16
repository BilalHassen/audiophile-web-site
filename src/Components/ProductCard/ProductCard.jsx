import { useEffect, useState } from "react";
import "./ProductCard.scss";
import ProductIncludes from "../ProductIncludes/ProductIncludes";
import ProductGallery from "../ProductGallery/ProductGallery";

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
}) {
  let featuresSplit = features.split("\n\n");
  let featuresParaOne = featuresSplit[0];
  let featuresParaTwo = featuresSplit[1];

  const [is_new, setIsNew] = useState(false);

  useEffect(() => {
    const isNew = () => {
      setIsNew(id === "1" || id === "2" || id === "6");
    };
    isNew();
  }, []);

  return (
    <>
      <div className="product__card">
        <div className="product__flex-container">
          <div className="product__img-container">
            <img className="product__img" src={urlMobile}></img>
          </div>
          <div className="product__details-wrapper">
            {is_new ? (
              <h2 className={is_new ? "product__new-product" : null}>
                {" "}
                new product
              </h2>
            ) : null}

            <h1 className="product__title">{name}</h1>
            <p className="product__description">{description}</p>
            <p className="product__price">$ {price}</p>
            <div className="product__add-delete">
              <div className="product__controller-container">
                <button className="product__delete">-</button>
                <p className="product__number">1</p>
                <button className="product__delete">+</button>
              </div>
              <button className="product__button">add to cart</button>
            </div>
          </div>
        </div>
        <h3 className="product__features-title">features</h3>
        <div className="product__features-container">
          <p className="product__features">{featuresParaOne}</p>
          <p className="product__features">{featuresParaTwo}</p>
        </div>

        <h3 className="product__quantity-title">In the box</h3>
        <div className="product__includes-wrapper">
          {includes.map((data, index) => (
            <div className="product__includes-container">
              <ProductIncludes quantity={data.quantity} item={data.item} />
            </div>
          ))}
        </div>
        <div className="product__gallery">
          <ProductGallery imageData={imageData} />
        </div>
      </div>
    </>
  );
}
