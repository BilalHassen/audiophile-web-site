import { useEffect, useState } from "react";
import axios from "axios";

export default function RelatedProducts({ productId }) {
  const baseUrl = `http://localhost:8080/products/relatedproducts/${productId}`;

  const [productData, setProductData] = useState();

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

  return (
    <>
      <h1>Related Products</h1>
    </>
  );
}
