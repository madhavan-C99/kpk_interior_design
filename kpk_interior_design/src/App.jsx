import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
// import DesignProcess from './pages/services/designprocess/DesignProcess'
// import HeroSection from './pages/services/hero/HeroSection'
// import KeyFeatures from './pages/services/keyfeatures/KeyFeatures'
// import FeedBack from './pages/services/feedback/feedback'
// import HappyClients from './pages/services/happyclient/HappyClients'
// import Faq from './pages/services/faq/Faq'
// import HomeHeroSec from './pages/home/homehero/HomeHeroSec'
// import HomeRankSec from './pages/home/homeranksec/HomeRankSec'
// import HomeRatingSec from './pages/home/homerating/HomeRatingSec'
// import HomeOurService from './pages/home/homeourservice/HomeOurService'
// import HomeAboutUs from './pages/home/homeaboutus/HomeAboutUs'
// import HomeRateSec from './pages/home/homeratesec/HomeRateSec'
import Home from './pages/home/Home'
import Services from './pages/services/Services'

function App() {

  return (
<>   

    <Router>
      <Navbar/>

      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/services' element={ <Services/>}/>
          {/* <Route path='/' element={}/>
         <Route path='/' element={ }/>
         <Route path='/' element={ }/> */}
      </Routes>
    </Router>

</>
  )
}

export default App
