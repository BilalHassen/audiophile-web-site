import "./Hero.scss";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <hr className="hero__divider small"></hr>
        <div className="hero__image-wrapper">
          <div className="hero__content">
            <div className="hero__product-box">
              <p className="hero__product-text">new product</p>
            </div>
            <div className="hero__title">
              <h1 className="hero__title-text">
                xx99 mark II <br></br>headphones
              </h1>
            </div>
            <div className="hero__product-description">
              <p className="hero__description-text">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast
              </p>
            </div>
            <Link to="/products/2">
              <div className="hero__button-container">
                <button className="hero__button">
                  <p className="hero__button-text">see product</p>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
