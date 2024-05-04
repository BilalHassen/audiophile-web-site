import Header from "../../Components/Header/Header";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import Footer from "../../Components/Footer/Footer";
import HeadPhonesCard from "../../Components/HeadPhonesCard/HeadPhonesCard";
import EarPhonesCard from "../../Components/EarphonesCard/EarPhonesCard";
import axios from "axios";
import { useEffect, useState } from "react";
export default function EarPhonesPage() {
  const apiURL = "http://localhost:8080/products/earphones";

  const [earphonesData, setEarPhonesData] = useState([]);

  const getEarphonesData = async () => {
    try {
      const response = await axios.get(apiURL);
      const data = response.data;
      setEarPhonesData(data);
    } catch {
      console.log("error fetching data", error);
    }
  };

  useEffect(() => {
    getEarphonesData();
    console.log(earphonesData);
  }, []);

  return (
    <>
      <Header />
      <div className="earphones-title">earphones</div>
      <section className="earphones">
        {earphonesData.map((data, index) => (
          <EarPhonesCard
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
