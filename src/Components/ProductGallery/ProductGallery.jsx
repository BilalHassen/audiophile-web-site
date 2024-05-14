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

  return <></>;
}
