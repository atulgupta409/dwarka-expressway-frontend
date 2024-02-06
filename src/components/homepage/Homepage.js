import React from "react";
import HomeBanner from "./home-banner/HomeBanner";
import BestProjectsByLocation from "./best-projects/BestProjectsByLocation";
import DwarkaExpresswayMap from "./dwarka-expressway-map/DwarkaExpresswayMap";
import FinancialIntelligence from "./financial-intelligence/FinancialIntelligence";
import ContactForm from "./contact/ContactForm";

const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <BestProjectsByLocation />
      <DwarkaExpresswayMap />
      <FinancialIntelligence />
      <ContactForm />
    </>
  );
};

export default Homepage;
