import { useEffect, useState } from "react";
import "./ProductCard.scss";

export default function ProductCard({
  id,
  name,
  description,
  features,
  includes,
  price,
  urlMobile,
  urlTablet,
  urlDesktop,
  imageData,
}) {
  const [is_new, setIsNew] = useState(false);

  useEffect(() => {
    const isNew = () => {
      setIsNew(id === "1" || id === "2" || id === "6");
    };
    isNew();
  }, []);

  return <></>;
}
