import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useState } from 'react'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Wardrobe from './pages/wardrobe/Wardrobe'
import Footer from './components/footer/Footer'
import ContactView from './pages/contact/ContactView'
import ImageShow from './pages/imageview/ImageShow'
// pooja and tv unit

import PoojaTvPage from "./pages/pooja_tv/PoojaTvPage";

// About ,Price,Portfolio,Contact

import Price from "./pages/price/Price";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";



function App() {

  return (
<>   
    {/* <BrowserRouter> */}
    {/* <Router> */}
      {/* <ContactView /> */}
      {/* <ImageShow/> */}
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/image/expolre' element={<ContactView/>}/>
         <Route path='/services/modular/kitchen' element={ <Services/>}/>
         <Route path='/services/wardrobe' element={<Wardrobe/>}/>
          <Route path='/services/pooja_unit' element={<PoojaTvPage type="pooja" />}/>
         <Route path='/services/tv_unit' element={<PoojaTvPage type="tv" />}/>
        <Route path="/pricing" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes> 
      <Footer/>
    {/* </Router> */}
    {/* </BrowserRouter> */}

</>
  )
}

export default App;
