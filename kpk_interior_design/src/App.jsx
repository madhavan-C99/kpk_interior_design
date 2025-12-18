import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Price from "./pages/price/Price";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import { useState } from 'react'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Wardrobe from './pages/wardrobe/Wardrobe'
import Footer from './components/footer/Footer'
import ContactView from './pages/contact/ContactView'
import ImageShow from './pages/imageview/ImageShow'



function App() {

  return (
<>   

    <Router>
      {/* <ContactView /> */}
      {/* <ImageShow/> */}
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/services/modular/kitchen' element={ <Services/>}/>
         <Route path='/services/wardrobe' element={<Wardrobe/>}/>
      </Routes> 
      <Footer/>
    </Router>

</>
  )
}

export default App;
