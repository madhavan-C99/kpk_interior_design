import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import UserForm from "./components/userform/UserForm";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Wardrobe from "./pages/wardrobe/Wardrobe";
import ContactView from "./pages/contact/ContactView";
import PoojaTvPage from "./pages/pooja_tv/PoojaTvPage";
import Price from "./pages/price/Price";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Icon from "./components/icons/Icon";

// import Icon from "./components/icons/Icon";

/* INNER COMPONENT */
function AppRoutes() {
  const location = useLocation();

  const [manualOpen, setManualOpen] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);

  /* AUTO OPEN ON EVERY PAGE WITH DELAY */
  useEffect(() => {
    setAutoOpen(false);

    const timer = window.setTimeout(() => {
      setAutoOpen(true);
    }, 10000); //  10 sec delay

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const isFormVisible = manualOpen || autoOpen;

  const openForm = () => setManualOpen(true);

  const closeForm = () => {
    setManualOpen(false);
    setAutoOpen(false);
  };

  return (
    <>
      <Navbar openForm={openForm} />

      <Routes>
        <Route path="/" element={<Home openForm={openForm} />} />
        <Route path="/image/expolre" element={<ContactView openForm={openForm} />} />
        <Route path="/services/modular/kitchen" element={<Services openForm={openForm} />} />
        <Route path="/services/wardrobe" element={<Wardrobe openForm={openForm} />} />
        <Route path="/services/pooja_unit" element={<PoojaTvPage openForm={openForm} type="pooja" />} />
        <Route path="/services/tv_unit" element={<PoojaTvPage openForm={openForm} type="tv" />} />
        <Route path="/pricing" element={<Price openForm={openForm} />} />
        <Route path="/contact" element={<Contact openForm={openForm} />} />
        <Route path="/about" element={<About openForm={openForm} />} />
        <Route path="/portfolio" element={<Portfolio openForm={openForm} />} />
      </Routes>

      {/* ONE FORM – TWO FUNCTIONS */}
      {isFormVisible && <UserForm onClose={closeForm} />}

      <Icon />
      <Footer />
    </>
  );
}

/*  MAIN APP */
export default function App() {
  return (
    // <Router>
      <AppRoutes />
    // </Router>
  );
}