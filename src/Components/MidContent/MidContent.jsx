import { Component } from "react";
import cirlces from "../../assets/home/desktop/pattern-circles.svg";
import speakers from "../../assets/home/mobile/image-speaker-zx9.png";
import MidContentSpeaker from "../../Components/MidContentSpeaker/MidContentSpeaker";
import MidContentHeadphones from "../MidContentHeadphones/MidContentHeadphones";
import "./MidContent.scss";
import { useEffect, useState } from "react";
export default function MidContent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDeskTop, setDesktop] = useState(false);

  const handleScreenSize = () => {
    if (window.innerWidth >= 1366) {
      setDesktop(true);
    }

    if (window.innerWidth < 1366) {
      setDesktop(false);
    }
  };

  useEffect(() => {
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [window.innerWidth]);

  return (
    <>
      {isDeskTop ? (
        <section className="midContent">
          <div className="midContent__wrapper">
            <div className="midContent__image-wrapper">
              <img className="midContent__speaker" src={speakers}></img>
            </div>
            <div className="midContent__container">
              <h1 className="midContent__title">
                zx9 <br></br>speaker
              </h1>
              <p className="midContent__para">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound
              </p>
              <button className="midContent__button">see product</button>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="midContent">
            <div className="midContent__wrapper">
              <div className="midContent__image-wrapper">
                <img className="midContent__speaker" src={speakers}></img>
              </div>

              <h1 className="midContent__title">
                zx9 <br></br>speaker
              </h1>
              <p className="midContent__para">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound
              </p>
              <button className="midContent__button">see product</button>
            </div>
          </section>
        </>
      )}
      <MidContentSpeaker />
      <MidContentHeadphones />
    </>
  );
}
