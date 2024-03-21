import Header from "../../Components/Header/Header";

import "./HomePage.scss";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Header />
    </>
  );
}
