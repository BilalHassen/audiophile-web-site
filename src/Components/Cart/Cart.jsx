import { useParams } from "react-router-dom";
export default function Cart() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h1>cart Component</h1>
    </>
  );
}
