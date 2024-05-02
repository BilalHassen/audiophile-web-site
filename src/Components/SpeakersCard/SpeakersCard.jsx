import "./SpeakersCard.scss";

export default function SpeakersCard({
  name,
  description,
  urlMobile,
  urlTablet,
  urlDesktop,
}) {
  return (
    <>
      <div className="speakers__card">
        <img className="speakers__card-image" src={urlMobile}></img>
        <h1 className="speakers__card-name">{name}</h1>
        <p className="speakers__card-description">{description}</p>
        <button className="speakers__card-button">see product</button>
      </div>
    </>
  );
}
