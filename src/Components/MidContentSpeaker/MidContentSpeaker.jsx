import "./MidContentSpeaker.scss";
import speaker from "../../assets/home/mobile/image-speaker-zx7.jpg";
export default function MidContentSpeaker() {
  return (
    <>
      <div className="midContentSpeaker">
        <h1 className="midContentSpeaker__title">zx7 speaker</h1>
        <img
          className="midContentSpeaker"
          src={speaker}
          alt={"homepage-speaker"}
        ></img>
        <button className="midContentSpeaker__button">
          <p className="midContentSpeaker__button-txt">see product</p>
        </button>
      </div>
    </>
  );
}
