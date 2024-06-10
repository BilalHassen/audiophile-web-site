import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import "./RelatedProducts.scss";

export default function RelatedProducts({ productId }) {
  const baseUrl = `http://localhost:8080/products/relatedproducts/${productId}`;

  const [productData, setProductData] = useState([]);
  const [screenSize, setScreenSize] = useState(handleImageUrl());

  useEffect(() => {
    const getRelatedPorductData = async () => {
      try {
        const productsData = await axios.get(baseUrl);
        let relatedProductsData = productsData.data;
        setProductData(relatedProductsData);
      } catch (error) {
        console.log(error);
      }
    };

    getRelatedPorductData();
  }, []);

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

  return (
    <>
      {productData.slice(0, 3).map((data) => {
        return (
          <div className="product__related-card">
            <div
              className="product__related-img-container"
              style={{
                backgroundImage: `url(${
                  screenSize === "mobile"
                    ? data.mobile_url
                    : screenSize === "tablet"
                    ? data.tablet_url
                    : data.desktop_url
                })`,
              }}
            ></div>
            <h3 className="product__related-name">{data.name}</h3>
            <div className="product__related-button-container">
              <button className="product__related-button">see product</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
