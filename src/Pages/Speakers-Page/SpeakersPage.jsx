import axios from "axios";
import Header from "../../Components/Header/Header";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import "./SpeakersPage.scss";
import SpeakersCard from "../../Components/SpeakersCard/SpeakersCard";
export default function SpeakersPage() {
  const [speakersData, setSpeakersData] = useState([]);

  const apiURL = "http://localhost:8080/products/speakers";

  useEffect(() => {
    const getSpeakersData = async () => {
      try {
        let response = await axios.get(apiURL);
        if (response.status === 200 && Array.isArray(response.data)) {
          let speakersData = response.data;
          setSpeakersData(speakersData);
          // check if server responds but the response does not meet
          // expected format
        } else {
          console.error("Error fetching speakers data:", error.message);
        }
        // handle the event where the request itself fails
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSpeakersData();
  }, []);

  return (
    <>
      <Header />
      <h1 className="speakers-title">speakers</h1>
      <section className="speakers">
        {speakersData.map((data, index) => (
          <SpeakersCard
            id={data.id}
            key={data.id}
            newProduct={index === 1 ? "new product" : null}
            reverseClass={index === 0 ? "reverse" : null}
            textWidthClass={index === 0 ? "textWidthClass" : null}
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
