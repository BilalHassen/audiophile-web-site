import axios from "axios";
import Header from "../../Components/Header/Header";
import AudiophileDescription from "../../Components/AudiophileDescription/AudiophileDescription";
import Footer from "../../Components/Footer/Footer";
export default function SpeakersPage() {
  return (
    <>
      <Header />
      <section className="speakers">
        <h1 className="speakers__title">speakers</h1>
      </section>
      <AudiophileDescription />
      <Footer />
    </>
  );
}
