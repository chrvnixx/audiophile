import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeadphonesPage from "./pages/HeadphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonesPage from "./pages/EarphonesPage";
import Xx99Mark2Page from "./pages/Xx99Mark2Page";
import Xx99Mark1Page from "./pages/Xx99Mark1Page";
import Zx9SpeakerPage from "./pages/Zx9SpeakerPage";
import Zx7SpeakerPage from "./pages/Zx7SpeakerPage";
import Yx1EarphonePage from "./pages/Yx1EarphonePage";

import { useState } from "react";

import Checkout from "./pages/Checkout";
import CartModal from "./components/CartModal";
import Cart from "./components/Cart";
import MenuModal from "./components/MenuModal";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div>
        <Navbar setOpenCart={setOpenCart} />

        <CartModal openCart={openCart}>
          <Cart setOpenCart={setOpenCart} />
        </CartModal>

        <MenuModal openMenu={openMenu}></MenuModal>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/headphones" element={<HeadphonesPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/earphones" element={<EarphonesPage />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/headphones/xx99-mark-two" element={<Xx99Mark2Page />} />
          <Route path="/headphones/xx99-mark-one" element={<Xx99Mark1Page />} />
          <Route path="/speakers/zx9" element={<Zx9SpeakerPage />} />
          <Route path="/speakers/zx7" element={<Zx7SpeakerPage />} />
          <Route path="/earphones/yx1" element={<Yx1EarphonePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
