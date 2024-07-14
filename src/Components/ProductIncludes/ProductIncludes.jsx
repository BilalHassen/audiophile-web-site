import { useEffect } from "react";
import "./ProductIncludes.scss";

export default function ProductIncludes({ quantity, item, id }) {
  // Ensure to destructure props correctly with curly braces {}

  useEffect(() => {
    // This effect will run whenever quantity or item changes
    console.log("Quantity:", quantity);
    console.log("Item:", item);
  }, [id]); // Include quantity and item in the dependency array

  return (
    <>
      <div className="product__inthebox">
        <div className="product__quantity">{`${quantity}x`}</div>
        <div className="product__item">{item}</div>
      </div>
    </>
  );
}
