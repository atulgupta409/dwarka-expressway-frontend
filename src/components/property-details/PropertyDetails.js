import React, { lazy } from "react";
import "./PropertyDetails.css";

const BannerSlider = lazy(() => import("./BannerSlider"));
const AboutProperty = lazy(() => import("./AboutProperty"));
const Price = lazy(() => import("./Price"));
const FeaturesAndAmenity = lazy(() => import("./FeaturesAndAmenity"));
const LocationMap = lazy(() => import("./LocationMap"));
const PropertyPlans = lazy(() => import("./PropertyPlans"));
const PropertyImages = lazy(() => import("./PropertyImages"));

const PropertyDetails = () => {
  return (
    <>
      <BannerSlider />
      <AboutProperty />
      <Price />
      <FeaturesAndAmenity />
      <LocationMap />
      <PropertyPlans />
      <PropertyImages />
    </>
  );
};

export default PropertyDetails;
