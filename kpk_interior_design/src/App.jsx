import { useState } from 'react'
import './App.css'
import ContactForm from './pages/services/forms/ContactForm'
import ServiceSteps from './pages/services/sections/ServiceSteps'
import ProjectGallery from './pages/services/projectgallery/ProjectGallery'
import AccessoriesGallery from './pages/services/accessoriesgallery/AccessoriesGallery'
import KitchenDesigns from './pages/services/kitchendesigns/KitchenDesigns'
import WhyChooseUs from './pages/home/whychooseus/whychooseus'
import CraftingSpace from './pages/home/craftingspace/CraftingSpace'
import DesignSession from './pages/home/designsession/DesignSession'
import Consultation from './pages/home/consultation/Consultation'
import TopCategory from './pages/home/topcategory/TopCategory'
import CreativeDesign from './pages/home/creativedesign/CreativeDesign'
import Workflow from './pages/home/workflow/Workflow'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    {/* home page */}
      {/* <WhyChooseUs/> */}
      {/* <CraftingSpace/> */}
      <Workflow/>
      {/* <DesignSession/> */}
      {/* <Consultation/> */}
      {/* <CreativeDesign/> */}
      {/* <TopCategory/> */}
      

      {/* service page  */}
      {/* <ContactForm/>
      <ServiceSteps/>
      <ProjectGallery/>
      <AccessoriesGallery/>
      <KitchenDesigns/> */}

       {/* <Footer/>  */}
    </>
  )
}

export default App
