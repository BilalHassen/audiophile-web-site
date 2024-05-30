import { useParams } from "react-router-dom";
import "./Cart.scss";
export default function Cart() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="cart">
        <div className="cart__container">
          <h1>cart Component</h1>
        </div>
      </div>
    </>
  );
}
