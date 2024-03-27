import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import "./HomePage.scss";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
