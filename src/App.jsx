import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import HeadPhonesPage from "./Pages/HeadPhones-Page/HeadPhonesPage";
import SpeakersPage from "./Pages/Speakers-Page/SpeakersPage";
import EarPhonesPage from "./Pages/EarPhones-Page/EarPhonesPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div id="top"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="headphones" element={<HeadPhonesPage />} />
        <Route path="speakers" element={<SpeakersPage />} />
        <Route path="earphones" element={<EarPhonesPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
