import axios from "axios";
import Header from "../../Components/Header/Header";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import SpeakersCard from "../../Components/SpeakersCard/SpeakersCard";
export default function SpeakersPage() {
  const [speakersData, setSpeakersData] = useState([]);

  const apiURL = "http://localhost:8080/products/speakers";

  useEffect(() => {
    const getSpeakersData = async () => {
      try {
        let response = await axios.get(apiURL);
        let speakersData = response.data;
        setSpeakersData(speakersData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getSpeakersData();
  }, []);

  return (
    <>
      <Header />
      <section className="speakers">
        <h1 className="speakers__title">speakers</h1>
      </section>
      <AudiophileDescription />
      <Footer />
    </>
  );
}
