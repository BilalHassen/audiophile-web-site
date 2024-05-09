import { useEffect, useState } from "react";
import "./ProductCard.scss";
import ProductIncludes from "../ProductIncludes/ProductIncludes";

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
        <img className="product__img" src={urlMobile}></img>
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

        <div className="product__features-container">
          <p className="product__features">{}</p>
        </div>

        {includes.map((data, index) => (
          <div className="products__includes-container">
            <ProductIncludes />
          </div>
        ))}
      </div>
    </>
  );
}
