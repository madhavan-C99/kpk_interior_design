import { useState } from 'react'


import Navbar from './components/navbar/Navbar'
import DesignProcess from './pages/services/designprocess/DesignProcess'
import HeroSection from './pages/services/hero/HeroSection'
import KeyFeatures from './pages/services/keyfeatures/KeyFeatures'
import FeedBack from './pages/services/feedback/feedback'
import HappyClients from './pages/services/happyclient/HappyClients'
import Faq from './pages/services/faq/Faq'
import HomeHeroSec from './pages/home/homehero/HomeHeroSec'
import HomeRankSec from './pages/home/homeranksec/HomeRankSec'
import HomeRatingSec from './pages/home/homerating/HomeRatingSec'
import HomeOurService from './pages/home/homeourservice/HomeOurService'

function App() {

  return (
<>   
    <Navbar/>
    <HeroSection/>
    <KeyFeatures/>
   <DesignProcess/>
    <FeedBack/>
    <HappyClients/>
    <Faq/>
    {/* <HomeHeroSec/>
    <HomeRankSec/>
    <HomeRatingSec/>
    <HomeOurService/>
    <HappyClients/> */}
</>
  )
}

export default App
