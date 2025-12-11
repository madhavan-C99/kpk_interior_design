import DesignProcess from "../services/designprocess/DesignProcess";
import Faq from "../services/faq/Faq";
import HappyClients from "../services/happyclient/HappyClients";
import CraftingSpace from "./craftingspace/CraftingSpace";
import CreativeDesign from "./creativedesign/CreativeDesign";
import DesignSession from "./designsession/DesignSession";
import HomeAboutUs from "./homeaboutus/HomeAboutUs";
import HomeHeroSec from "./homehero/HomeHeroSec";
import HomeOurService from "./homeourservice/HomeOurService";
import HomeRankSec from "./homeranksec/HomeRankSec";
import HomeRateSec from "./homeratesec/HomeRateSec";
import HomeRatingSec from "./homerating/HomeRatingSec";
import TopCategory from "./topcategory/TopCategory";
import WhyChooseUs from "./whychooseus/whychooseus";
import Workflow from "./workflow/Workflow";


export default function Home(){
    return(
        <>
    <HomeHeroSec/>
     <HomeRankSec/>
    <HomeRatingSec/>
   <HomeOurService/>
    <HomeAboutUs/>
    <HomeRateSec/>
    <WhyChooseUs/>
   <CraftingSpace/>
    <Workflow/>
    <DesignSession/>
    <CreativeDesign/>
    <TopCategory/>
    <HappyClients/>
     <Faq/>
        </>
    )
}