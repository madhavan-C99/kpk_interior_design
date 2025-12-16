import { Helmet } from "react-helmet";
import PoojaUnitData from "../data/PoojaUnitData";
import TvUnitData from "../data/TvUnitData";

import PoojaTvHero from "../components/pooja_tv_hero/PoojaTvHero";
import PoojaTvOffer from "../components/pooja_tv_offer/PoojaTvOffer";
import PoojaTvGallery from "../components/pooja_tv_gallery/PoojaTvGallery";
import PoojaTvFeedback from "../components/pooja_tv_feedback/PoojaTvFeedback";

import PoojaTvCta from "../components/pooja_tv_cta/PoojaTvCta";
import PoojaTvFaq from "../components/pooja_tv_faq/PoojaTvFaq";


export default function PoojaTvPage({ type }) {
  const data = type === "pooja" ? PoojaUnitData : TvUnitData;

  return (
    <>

    {/* meta tags */}
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="keywords" content={data.meta.keywords} />
      </Helmet>

    
    {/* hero section */}
      <PoojaTvHero title={data.hero.title} image={data.hero.image} />

    {/* what we offer section */}
      <PoojaTvOffer 
      description={data.offer.description} 
      title={data.offer.title} 
      items={data.offer.items} />


    {/* gallery section  */}
     <PoojaTvGallery gallery={data.gallery} /> 


     {/* feedback section  */}
    <PoojaTvFeedback feedback={data.feedback} />

    {/* Cta section */}
      <PoojaTvCta
      heading={data.cta.heading}
      description={data.cta.description}
      buttonText={data.cta.buttonText}
      image={data.cta.image}
      />


    {/* faq section */}
      <PoojaTvFaq faq={data.faq} />

    </>
  );
}
