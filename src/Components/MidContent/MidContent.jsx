import cirlces from "../../assets/home/desktop/pattern-circles.svg";
import speakers from "../../assets/home/mobile/image-speaker-zx9.png";
import "./MidContent.scss";
export default function MidContent() {
  return (
    <>
      <section className="midContent">
        <div className="midContent__wrapper">
          <div className="midContent__image-wrapper">
            <img className="midContent__speaker" src={speakers}></img>
          </div>
          <h1 className="midContent__title">zx9 speaker</h1>
          <p className="midContent__para">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <button className="midContent__button">see product</button>
        </div>
      </section>
    </>
  );
}
