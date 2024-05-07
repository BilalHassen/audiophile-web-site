import "./ProductCard.scss";

export default function ProductCard({
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
  console.log(urlMobile);
  return (
    <>
      <div className="product__card">
        <img className="product__img" src={urlMobile}></img>
      </div>
    </>
  );
}
