import Header from "../../Components/Header/Header";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import Footer from "../../Components/Footer/Footer";
import HeadPhonesCard from "../../Components/HeadPhonesCard/HeadPhonesCard";
import axios from "axios";
import { useEffect, useState } from "react";
export default function HeadPhonesPage() {
  const [headphonesData, setHeadphonesData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("http://localhost:8080/products");
      console.log(response.data);
      setHeadphonesData(response.data);
    };

    fetchData();
  }, []);

  console.log({ headphonesData });

  return (
    <>
      <Header />
      <section className="headphones">
        {headphonesData.map((data) => (
          <HeadPhonesCard
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
