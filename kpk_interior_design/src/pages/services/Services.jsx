import DesignProcess from "../services/designprocess/DesignProcess";
import Faq from "../services/faq/Faq";
import FeedBack from "../services/feedback/feedback";
import HappyClients from "../services/happyclient/HappyClients";
import HeroSection from "../services/hero/HeroSection";
import KeyFeatures from "../services/keyfeatures/KeyFeatures";
import AccessoriesGallery from "./accessoriesgallery/AccessoriesGallery";
import ContactForm from "./forms/ContactForm";
import KitchenDesigns from "./kitchendesigns/KitchenDesigns";
import ProjectGallery from "./projectgallery/ProjectGallery";
import ServiceSteps from "./sections/ServiceSteps";


export default function Services(){
    return(
        <>
        <HeroSection/>
        <KeyFeatures/>
        <DesignProcess/>
        <ContactForm/>
        <ServiceSteps/>
        <ProjectGallery/>
        <AccessoriesGallery/>
        <KitchenDesigns/>
        <FeedBack/>
        <HappyClients/>
        <Faq/>             
        </>
    )
}