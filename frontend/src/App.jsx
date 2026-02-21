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

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/headphones" element={<HeadphonesPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/earphones" element={<EarphonesPage />} />

          <Route
            path="/headphones/:xx99-mark-two"
            element={<Xx99Mark2Page />}
          />
          <Route path="/headphones/xx99-mark-one" element={<Xx99Mark1Page />} />
          <Route path="/speakers/zx9" element={<Zx9SpeakerPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
