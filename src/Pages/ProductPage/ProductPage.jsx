import "../../Components/Header/Header";
import "./ProductPage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductPage() {
  const [productData, setProductData] = useState();
  const [productImageData, setProductImageData] = useState();

  const { id } = useParams();
  console.log(id);

  const apiUrl = `http://localhost:8080/products/${id}`;

  useEffect(() => {
    const getProductData = async () => {
      try {
        let response = await axios.get(apiUrl);
        let data = response.data.data;
        let imageData = response.data.imageData;
        setProductData(data);
        setProductImageData(imageData);
      } catch (error) {
        console.log(error);
      }
    };

    getProductData();
  }, []);

  return (
    <>
      <section className="product"></section>
    </>
  );
}
