import Header from "../../Components/Header/Header";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import Footer from "../../Components/Footer/Footer";
import HeadPhonesCard from "../../Components/HeadPhonesCard/HeadPhonesCard";
import axios from "axios";
import "./HeadPhonesPage.scss";
import { useEffect, useState } from "react";
export default function HeadPhonesPage() {
  const [headphonesData, setHeadphonesData] = useState();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`${baseURL}/products/headphones`);
        if (response.status === 200 && Array.isArray(response.data)) {
          setHeadphonesData(response.data);
        } else {
          console.error("Unexpected response format or status", response);
        }
      } catch (error) {
        console.error("Error fetching headphones data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="headphones-title">headphones</div>
      <section className="headphones">
        {headphonesData &&
          headphonesData.map((data, index) => (
            <HeadPhonesCard
              key={data.id}
              newProduct={index === 0 ? "New Product" : null}
              thirdClass={index === 2 ? "break" : null}
              secondClass={index === 1 ? "reverse" : null}
              id={data.id}
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
