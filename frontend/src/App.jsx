import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeadphonesPage from "./pages/HeadphonesPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/headphones" element={<HeadphonesPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
