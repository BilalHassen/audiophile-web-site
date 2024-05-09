import "../../Components/Header/Header";
import "./ProductPage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Header from "../../Components/Header/Header";

export default function ProductPage() {
  const [productData, setProductData] = useState([]);

  const { id } = useParams();
  console.log(id);

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

  return (
    <>
      <Header />
      <section className="product">
        {productData.map((data, index) => {
          let defaultData = data.data[0];
          let imageData = data.imageData;

          return (
            <ProductCard
              name={defaultData.name}
              description={defaultData.description}
              features={defaultData.features}
              includes={defaultData.includes}
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
