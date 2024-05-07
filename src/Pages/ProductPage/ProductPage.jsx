import "../../Components/Header/Header";
import "./ProductPage";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let productId = useParams();
  console.log(productId);
  return (
    <>
      <h1>Dyanmic Products Page </h1>
    </>
  );
}
