import FeedBack from "../services/feedback/feedback";
import WardoorHero from "./wardoorhero/WardoorHero";
import WardoorKeyFeatures from "./wardoorkeyfeature/WardoorKeyFeature";
import WardoorDesignProcess from "./wardoordesignprocess/WardoorDesignProcess";
import WardoorFaq from "./wardoorfaq/WardoorFaq";
import WardoorHappyClients from "./wardoorhappyclient/WardoorHappyClient";
import DimensionPlanning from "./planning/DimensionPlanning";
import UtilitySpaces from "./utilityspaces/UtilitySpaces";
import WardrobeDesigns from "./wardrobedesigns/WardrobeDesigns";
import ModernInteriorDesign from "./moderninteriordesign/ModernInteriorDesign";


export default function Wardrobe(){
    return(
        <>
        {console.log("wardrobe")}
        <WardoorHero/>
        <WardoorKeyFeatures/>
        <WardoorDesignProcess/>
        <DimensionPlanning/>
        <UtilitySpaces/>
        <WardrobeDesigns/>
        <ModernInteriorDesign/>
        <FeedBack/>
        <WardoorHappyClients/>
        <WardoorFaq/>
        {console.log("done")}
        </>
    )
}