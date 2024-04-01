import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Nav from "../../Components/Nav/Nav";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import MidContent from "../../Components/MidContent/MidContent";

import "./HomePage.scss";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Header />
      <Hero />
      {/* <Nav /> */}
      <MidContent />
      <AudiophileDescription />
    </>
  );
}
