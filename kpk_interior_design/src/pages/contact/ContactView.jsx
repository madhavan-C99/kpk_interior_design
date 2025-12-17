import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import FeedBack from "../services/feedback/feedback";
import ContactCreativeDesign from "./contactcreativedesign/ContactCreativeDesign";
import ContactHero from "./contacthero/ContactHero";


export default function ContactView(){
    return(
        <>
        <Navbar/>
        <ContactHero/>
        <ContactCreativeDesign/>
        <FeedBack/>
        <Footer/>
        </>
    )
}