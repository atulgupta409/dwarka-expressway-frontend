import React, { lazy } from "react";

const HomeBanner = lazy(() => import("./home-banner/HomeBanner"));
const BestProjectsByLocation = lazy(() =>
  import("./best-projects/BestProjectsByLocation")
);
const DwarkaExpresswayMap = lazy(() =>
  import("./dwarka-expressway-map/DwarkaExpresswayMap")
);
const FinancialIntelligence = lazy(() =>
  import("./financial-intelligence/FinancialIntelligence")
);
const ContactForm = lazy(() => import("./contact/ContactForm"));
const TopBuilders = lazy(() => import("./top-builders/TopBuilders"));
const YoutubeEmbed = lazy(() => import("./youtube-video/YoutubeEmbed"));

const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <BestProjectsByLocation />
      <DwarkaExpresswayMap />
      <FinancialIntelligence />
      <TopBuilders />
      <ContactForm />
      <YoutubeEmbed />
    </>
  );
};

export default Homepage;
