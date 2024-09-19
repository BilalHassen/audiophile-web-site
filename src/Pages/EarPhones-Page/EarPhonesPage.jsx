import Header from "../../Components/Header/Header";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import Footer from "../../Components/Footer/Footer";
import HeadPhonesCard from "../../Components/HeadPhonesCard/HeadPhonesCard";
import EarPhonesCard from "../../Components/EarphonesCard/EarPhonesCard";
import "./EarPhonesPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
export default function EarPhonesPage() {
  const apiURL = "http://localhost:8080/products/earphones";

  const [earphonesData, setEarPhonesData] = useState([]);

  const getEarphonesData = async () => {
    try {
      const response = await axios.get(apiURL);
      if (response.status === 200 && Array.isArray(response.data)) {
        const data = response.data;
        setEarPhonesData(data);
      } else {
        console.error("Error fetching ear phones data:", error.message);
      }
    } catch {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    getEarphonesData();
  }, []);

  return (
    <>
      <Header />
      <div className="earphones-title">earphones</div>
      <section className="earphones">
        {earphonesData.map((data, index) => (
          <EarPhonesCard
            id={data.id}
            key={data.id}
            name={data.name}
            description={data.description}
            urlMobile={data.url_mobile}
            urlTablet={data.url_tablet}
            urlDesktop={data.url_desktop}
          />
        ))}
      </section>

      <AudiophileDescription />
      <Footer />
    </>
  );
}
