import "./MidContentSpeaker.scss";
import speaker from "../../assets/home/mobile/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";
export default function MidContentSpeaker() {
  return (
    <>
      <div className="midContentSpeaker__wrapper">
        <div className="midContentSpeaker">
          <div className="midContentSpeaker__image-wrapper">
            <div className="midContentSpeaker__text-container">
              <h1 className="midContentSpeaker__title">zx7 speaker</h1>
              <Link to="/products/5">
                <button className="midContentSpeaker__button">
                  <p className="midContentSpeaker__button-txt">see product</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
