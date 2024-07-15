import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Nav from "../../Components/Nav/Nav";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import MidContent from "../../Components/MidContent/MidContent";
import Footer from "../../Components/Footer/Footer";
import "./HomePage.scss";
import Cart from "../../Components/Cart/Cart";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Nav />
      <MidContent />
      <AudiophileDescription />
      <Footer />
    </>
  );
}
