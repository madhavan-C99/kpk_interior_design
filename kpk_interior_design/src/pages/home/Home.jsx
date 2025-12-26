
import HappyClients from "../services/happyclient/HappyClients";
import Consultation from "./consultation/Consultation";
import CraftingSpace from "./craftingspace/CraftingSpace";
import CreativeDesign from "./creativedesign/CreativeDesign";
import DesignSession from "./designsession/DesignSession";
import HomeAboutUs from "./homeaboutus/HomeAboutUs";
import HomeFaq from "./homefaq/HomeFaq";
import HomeHeroSec from "./homehero/HomeHeroSec";
import HomeOurService from "./homeourservice/HomeOurService";
import HomeRankSec from "./homeranksec/HomeRankSec";
import HomeRateSec from "./homeratesec/HomeRateSec";
import HomeRatingSec from "./homerating/HomeRatingSec";
import TopCategory from "./topcategory/TopCategory";
import WhyChooseUs from "./whychooseus/whychooseus";
import Workflow from "./workflow/Workflow";


export default function Home({openForm}){
    return(
        <>
    <HomeHeroSec openForm={openForm}/>
     <HomeRankSec/>
    <HomeRatingSec/>
   <HomeOurService openForm={openForm}/>
    <HomeAboutUs/>
    <HomeRateSec/>
    <WhyChooseUs/>
   <CraftingSpace/>
    <Workflow/>
    <DesignSession openForm={openForm}/>
    <Consultation  openForm={openForm}/>
    <CreativeDesign/>
    <TopCategory/>
    <HappyClients openForm={openForm}/>
     <HomeFaq/>
        </>
    )
}