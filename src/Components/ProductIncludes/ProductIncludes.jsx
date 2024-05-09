import "./ProductIncludes.scss";
export default function ProductIncludes(quantity, item) {
  console.log(quantity);

  return (
    <>
      <div className="product__quantity">{`${quantity.quantity}x`}</div>
      <div className="product__item">{quantity.item}</div>
    </>
  );
}
