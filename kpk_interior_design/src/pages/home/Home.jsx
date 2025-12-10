import Faq from "../services/faq/Faq";
import HappyClients from "../services/happyclient/HappyClients";
import HomeAboutUs from "./homeaboutus/HomeAboutUs";
import HomeHeroSec from "./homehero/HomeHeroSec";
import HomeOurService from "./homeourservice/HomeOurService";
import HomeRankSec from "./homeranksec/HomeRankSec";
import HomeRateSec from "./homeratesec/HomeRateSec";
import HomeRatingSec from "./homerating/HomeRatingSec";


export default function Home(){
    return(
        <>
    <HomeHeroSec/>
    <HomeRankSec/>
    <HomeRatingSec/>
    <HomeOurService/>
    <HomeAboutUs/>
    <HomeRateSec/>
    <HappyClients/>
     <Faq/>
        </>
    )
}