import { useEffect, useState } from "react";
import axios from "axios";
import "./RelatedProducts.scss";

export default function RelatedProducts({ productId }) {
  const baseUrl = `http://localhost:8080/products/relatedproducts/${productId}`;

  const [productData, setProductData] = useState([]);

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
  }, [productId]);

  console.log(productData);

  if (productData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3 className="product__related-title">you may also like</h3>
      {productData.slice(0, 3).map((data) => (
        <div className="product__related-card">
          <div
            className="product__related-img-container"
            style={{ backgroundImage: `url(${data.mobile_url})` }}
          >
            {/* Content inside the container if needed */}
          </div>
          <h3 className="product__related-name">{data.name}</h3>
          <div className="product__related-button-container">
            <button className="product__related-button">see product</button>
          </div>
        </div>
      ))}
    </>
  );
}

/*
 <div className="product__related-card">
        <div className="product__related-img-container">
          <img
            className="product__related-img"
            src={productData[0].mobile_url}
          ></img>
        </div>
      </div>
      <div className="product__related-card">
        <div className="product__related-img-container">
          <img
            className="product__related-img"
            src={productData[1].mobile_url}
          ></img>
        </div>
      </div>
      <div className="product__related-card">
        <div className="product__related-img-container">
          <img
            className="product__related-img"
            src={productData[2].mobile_url}
          ></img>
        </div>
      </div>
*/
