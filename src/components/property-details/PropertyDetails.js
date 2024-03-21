import React, { lazy } from "react";
import "./PropertyDetails.css";
import FloorPlan from "./FloorPlan";
import Amenities from "./Amenities";
import ProjectLocation from "./ProjectLocation";

const BannerSlider = lazy(() => import("./BannerSlider"));
const AboutProperty = lazy(() => import("./AboutProperty"));
const Price = lazy(() => import("./Price"));
const LocationMap = lazy(() => import("./LocationMap"));
const PropertyPlans = lazy(() => import("./PropertyPlans"));
const PropertyImages = lazy(() => import("./PropertyImages"));

const PropertyDetails = () => {
  return (
    <>
      <BannerSlider />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <AboutProperty />
            <Price />
            <FloorPlan />
            <hr className="divider_line" />
            <Amenities />
            <hr className="divider_line" />
            <LocationMap />
            <hr className="divider_line" />
            <PropertyPlans />
            <hr className="divider_line" />
            <ProjectLocation />
            <hr className="divider_line" />
            <PropertyImages />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
