import DesignProcess from "../services/designprocess/DesignProcess";
import Faq from "../services/faq/Faq";
import FeedBack from "../services/feedback/feedback";
import HappyClients from "../services/happyclient/HappyClients";
import HeroSection from "../services/hero/HeroSection";
import KeyFeatures from "../services/keyfeatures/KeyFeatures";


export default function Services(){
    return(
        <>
        <HeroSection/>
        <KeyFeatures/>
        <DesignProcess/>
        <FeedBack/>
        <HappyClients/>
        <Faq/>             
        </>
    )
}