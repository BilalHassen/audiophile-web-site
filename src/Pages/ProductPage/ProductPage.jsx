import "../../Components/Header/Header";
import "./ProductPage";
import { json, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Header from "../../Components/Header/Header";

export default function ProductPage() {
  const [productData, setProductData] = useState([]);

  const { id } = useParams();

  const apiUrl = `http://localhost:8080/products/${id}`;

  useEffect(() => {
    const getProductData = async () => {
      try {
        let response = await axios.get(apiUrl);
        let data = response.data;
        setProductData([data]);
      } catch (error) {
        console.log(error);
      }
    };

    getProductData();
  }, []);

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <Header />
      <section className="product">
        <button className="product__direction" onClick={goBack}>
          Go Back
        </button>
        {productData.map((data, index) => {
          let defaultData = data.data[0];
          let imageData = data.imageData;
          let productIncludes = data.data[0].includes;
          // Parse the 'includes' data from a JSON string to a JavaScript object array
          const jsonIncludesData = JSON.parse(productIncludes);
          return (
            <ProductCard
              key={index}
              id={id}
              name={defaultData.name}
              description={defaultData.description}
              features={defaultData.features}
              includes={jsonIncludesData}
              price={defaultData.price}
              urlMobile={defaultData.url_mobile}
              urlTablet={defaultData.url_tablet}
              urlDesktop={defaultData.url_Desktop}
              imageData={imageData}
            />
          );
        })}
      </section>
    </>
  );
}
