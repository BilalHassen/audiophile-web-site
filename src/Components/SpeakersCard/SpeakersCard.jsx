import "./SpeakersCard.scss";
import { useEffect, useState } from "react";
export default function SpeakersCard({
  name,
  description,
  urlMobile,
  urlTablet,
  urlDesktop,
}) {
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [desktop, setDesktop] = useState(false);

  const handleScreenSize = () => {
    const currentWidth = window.innerWidth;

    setMobile(currentWidth < 768);
    setTablet(currentWidth >= 768 && currentWidth < 1366);
    setDesktop(currentWidth >= 1366);
  };

  useEffect(() => {
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);

    const cleanUpFunction = () => {
      return window.removeEventListener("resize", handleScreenSize);
    };

    return cleanUpFunction;
  }, []);

  return (
    <>
      <div className="speakers__card">
        {mobile ? (
          <img className="speakers__card-image" src={urlMobile}></img>
        ) : null}

        {tablet ? (
          <img className="speakers__card-image" src={urlTablet}></img>
        ) : null}

        {desktop ? (
          <img className="speakers__card-image" src={urlDesktop}></img>
        ) : null}

        <h1 className="speakers__card-name">{name}</h1>
        <p className="speakers__card-description">{description}</p>
        <button className="speakers__card-button">see product</button>
      </div>
    </>
  );
}
