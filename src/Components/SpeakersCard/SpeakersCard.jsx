import "./SpeakersCard.scss";
import { useEffect, useState } from "react";
export default function SpeakersCard({
  name,
  description,
  urlMobile,
  urlTablet,
  urlDesktop,
  newProduct,
  reverseClass,
  textWidthClass,
}) {
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [desktop, setDesktop] = useState(false);

  if (newProduct) {
    console.log(newProduct);
  } else {
    console.log(false);
  }

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
      <div className={`speakers__card ${reverseClass}`}>
        <div className="speakers__image-container">
          {mobile ? (
            <img className="speakers__image-container" src={urlMobile}></img>
          ) : null}

          {tablet ? (
            <img className="speakers__image-container" src={urlTablet}></img>
          ) : null}

          {desktop ? (
            <img className="speakers__image-container" src={urlDesktop}></img>
          ) : null}
        </div>
        <div className="speakers__text-container">
          <h2 className="speakers__new-product">{newProduct}</h2>
          <h1 className={`speakers__card-title `}>{name}</h1>
          <p className={`speakers__para ${textWidthClass}`}>{description}</p>
          <div className="speakers__button-container">
            <button className="speakers__button">see product</button>
          </div>
        </div>
      </div>
    </>
  );
}
