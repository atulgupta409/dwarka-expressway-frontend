import React, { Suspense, lazy } from "react";
import DwarkaExpresswayMap from "./dwarka-expressway-map/DwarkaExpresswayMap";
import FinancialIntelligence from "./financial-intelligence/FinancialIntelligence";
import ContactForm from "./contact/ContactForm";
import HomeBanner from "./home-banner/HomeBanner";
import ShimmerCard from "../card/ShimmerCard";
import PropertyExpert from "./property-expert/PropertyExpert";
import Faq from "./faq/Faq";
const BestAffordableHousing = lazy(() =>
  import("./best-projects/BestAffordableHousing")
);
const BestCommercialProjects = lazy(() =>
  import("./best-projects/BestCommercialProjects")
);
const ScoPlotsGurgaon = lazy(() => import("./best-projects/ScoPlotsGurgaon"));
const YoutubeEmbed = lazy(() => import("./youtube-video/YoutubeEmbed"));
const BestProjectsByLocation = lazy(() =>
  import("./best-projects/BestProjectsByLocation")
);

const TopBuilders = lazy(() => import("./top-builders/TopBuilders"));

const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <Suspense fallback={<ShimmerCard cards={8} />}>
        <BestProjectsByLocation />
      </Suspense>
      <ScoPlotsGurgaon />
      <Suspense fallback={<ShimmerCard cards={8} />}>
        <BestCommercialProjects />
      </Suspense>
      <PropertyExpert />
      <Suspense fallback={<ShimmerCard cards={8} />}>
        <BestAffordableHousing />
      </Suspense>
      <DwarkaExpresswayMap />
      <FinancialIntelligence />
      <Suspense fallback={<h2>Loading...</h2>}>
        <TopBuilders />
      </Suspense>
      <ContactForm />
      <Suspense fallback={<h2>Loading...</h2>}>
        <YoutubeEmbed />
      </Suspense>
      <Faq />
    </>
  );
};

export default Homepage;
