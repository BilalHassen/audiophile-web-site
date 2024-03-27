import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Nav from "../../Components/Nav/Nav";
import "./HomePage.scss";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Header />
      <Hero />
      <Nav />
    </>
  );
}
