import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PoojaTvPage from "./pages/PoojaTvPage";

function App() {
  return (
    
    <BrowserRouter>

    <Navbar />
      <Routes>
        {/* SEO-specific pages */}
        <Route
          path="/services/pooja-unit"
          element={<PoojaTvPage type="pooja" />}
        />

        <Route
          path="/services/tv-unit"
          element={<PoojaTvPage type="tv" />}
        />
        
        {/* Optional: homepage or fallback */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
