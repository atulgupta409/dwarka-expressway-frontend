import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../../card/Card";

const BestAffordableHousing = () => {
  return (
    <>
      <div className="container main_container">
        <div className="heading_box">
          <div>
            <h2 className="best_project_heading">
              <span className="heading_span">Dwarka Expressway</span> Affordable
              Housing Projects
            </h2>
          </div>
          <div>
            <Link className="view_all_btn">
              View All <FaArrowRightLong className="shake" />
            </Link>
          </div>
        </div>
        <p className="text-justify">
          Dwarka Expressway is the upcoming residential hub. Because of its
          strategic location, it is the top pick by residents of Gurgaon &
          Delhi. A grade Social & Physical Infrastructure, Fast-Paced
          Connectivity, & Landscape Greenery all around make it an ideal 29.5 km
          long site to live flawlessly in NCR. There are 60,000+ Group & Mid
          Housing segment, High-End Villas, and Front Facing Plots are in Dwarka
          Expressway. Today, extremely premier high-rise accommodations on this
          Expressway, i.e. M3M, ATS Triumph, Puri Diplomatic Greens, Joyville
          Gurgaon, Emaar, Godrej Air, and Conscient Heritage Max. However, a
          list of low rise and the highly preferred complex includes; Vatika
          Xpressions, SS Almeria, Emaar Imperial Garden, Smart Word Gems, M3M
          Low Rise, Godrej Prive, Signature Global Millenia, SS Linden, Tata La
          Vida, & far more.
        </p>
        <div className="row best_projects_row">
          <div className="col-md-3 col-8 mt30">
            <Card />
          </div>
          <div className="col-md-3 col-8 mt30">
            <Card />
          </div>
          <div className="col-md-3 col-8 mt30">
            <Card />
          </div>
          <div className="col-md-3 col-8 mt30">
            <Card />
          </div>
          <div className="col-md-3 col-8 mt30">
            <Card />
          </div>
          <div className="col-md-3 col-8 mt30">
            <Card />
          </div>
          <div className="col-md-3 col-8 mt30">
            <Card />
          </div>
          <div className="col-md-3 col-8 mt30">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestAffordableHousing;
