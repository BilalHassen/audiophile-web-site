import { useState, useEffect } from "react";

export default function Summary({ cartData }) {
  console.log(cartData);

  const [screenSize, setScreenSize] = useState(handleImageUrl());
  function handleImageUrl() {
    let width = window.innerWidth;

    if (width < 768) {
      return "mobile";
    }

    if (width >= 768 && width < 1366) {
      return "tablet";
    }

    if (width >= 1366) {
      return "desktop";
    }
  }

  // update the screensize state with the returned value from handleImageUrl
  const handleScreenSize = () => {
    // update screenSize variable with value returned from handleImageUrl
    setScreenSize(handleImageUrl());
  };

  useEffect(() => {
    // update screen size when component mounts
    handleScreenSize();

    const resize = () => {
      handleScreenSize();
    };

    // add event listener to window
    window.addEventListener("resize", resize);

    // clean up function
    const removeEventListener = () => {
      return window.removeEventListener("resize", resize);
    };

    return removeEventListener;
  }, []);

  return (
    <>
      <div className="summary"></div>
    </>
  );
}
