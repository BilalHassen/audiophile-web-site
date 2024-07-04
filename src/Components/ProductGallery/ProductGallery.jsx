import { useState, useEffect } from "react";
import "./ProductGallery.scss";

export default function ProductGallery({ imageData }) {
  const [galleryFirst, setGalleryFirst] = useState(imageData[0]);
  const [gallerySecond, setGallerySecond] = useState(imageData[1]);
  const [galleryThird, setGalleryThird] = useState(imageData[2]);
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const handleImageUrl = () => {
    const currentWidth = window.innerWidth;

    setMobile(currentWidth < 768);
    setTablet(currentWidth >= 768 && currentWidth < 1366);
    setDesktop(currentWidth >= 1366);
  };

  useEffect(() => {
    handleImageUrl();

    window.addEventListener("resize", handleImageUrl);

    const removeListener = () => {
      return window.removeEventListener("resize", handleImageUrl);
    };

    return removeListener;
  }, []);

  return (
    <>
      <div className="product__gallery-larger-container">
        {isMobile ? (
          <div className="product__img-container">
            <img
              className="product__gallery-img"
              src={galleryFirst.url_mobile}
              alt="Mobile Image"
            />
          </div>
        ) : null}
        {isTablet ? (
          <div className="product__img-container">
            <img
              className="product__gallery-img"
              src={galleryFirst.url_tablet}
              alt="Tablet Image"
            />
          </div>
        ) : null}
        {isDesktop ? (
          <div className="product__img-container">
            <img
              className="product__gallery-img"
              src={galleryFirst.url_desktop}
              alt="Desktop Image"
            />
          </div>
        ) : null}
        {isMobile ? (
          <div className="product__img-container">
            <img
              className="product__gallery-img"
              src={gallerySecond.url_mobile}
              alt="Mobile Image"
            />
          </div>
        ) : null}
        {isTablet ? (
          <div className="product__img-container">
            <img
              className="product__gallery-img"
              src={gallerySecond.url_tablet}
              alt="Tablet Image"
            />
          </div>
        ) : null}
        {isDesktop ? (
          <div className="product__img-container">
            <img
              className="product__gallery-img"
              src={gallerySecond.url_desktop}
              alt="Desktop Image"
            />
          </div>
        ) : null}
      </div>
      {isMobile ? (
        <div className="container">
          <img
            className="product__gallery-img large"
            src={galleryThird.url_mobile}
            alt="Mobile Image"
          />
        </div>
      ) : null}
      {isTablet ? (
        <div className="container">
          <img
            className="product__gallery-img large"
            src={galleryThird.url_tablet}
            alt="Tablet Image"
          />
        </div>
      ) : null}
      {isDesktop ? (
        <div className="container">
          <img
            className="large"
            src={galleryThird.url_desktop}
            alt="Desktop Image"
          />
        </div>
      ) : null}
    </>
  );
}
