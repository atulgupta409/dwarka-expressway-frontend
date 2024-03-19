import React from "react";
import "./PropertyExpert.css";
import sumit from "../../../assets/sumit-sir.png";
import certified from "../../../assets/certified-icon.svg";
import localities from "../../../assets/Localities.svg";
import trends from "../../../assets/Trending.svg";
import future from "../../../assets/future.svg";
import insights from "../../../assets/insights.svg";

const PropertyExpert = () => {
  return (
    <section className="property_expert main_container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 property_expert_left">
            <h2>
              Connect With Our <br />
              Dwarka Expressway Property Expert{" "}
            </h2>
            <p className="expert_name">Sumit Anand</p>
            <p className="f500">Trusted by Users | Market Expert</p>
            <p>
              We deal all kind of residential properties and commercial
              properties <br />
              in Gurgaon. We offer our clients unmatched, smarter, faster and{" "}
              <br />
              reliable Real Estate Services.
            </p>
            <button className="expert_btn">Contact Now</button>
          </div>
          <div className="col-md-6 property_expert_right">
            <div className="d-flex align-item-center expert_right">
              <div className="expert_right_img">
                <img src={localities} alt="localities" className="img-fluid" />
              </div>
              <div>
                <p className="expert_right_heading">Understand Localities</p>
                <p>Discover & Get to know different localities</p>
              </div>
            </div>
            <div className="d-flex align-item-center expert_right">
              <div className="expert_right_img">
                <img src={trends} alt="trends" className="img-fluid" />
              </div>
              <div>
                <p className="expert_right_heading">Get Price Trends</p>
                <p>Get to know and analyse how markets are rising & falling</p>
              </div>
            </div>
            <div className="d-flex align-item-center expert_right">
              <div className="expert_right_img">
                <img src={future} alt="future" className="img-fluid" />
              </div>
              <div>
                <p className="expert_right_heading">
                  Discover Dwarka Expressway Property Future
                </p>
                <p>Get to know and analyse how markets are rising & falling</p>
              </div>
            </div>
            <div className="d-flex align-item-center expert_right">
              <div className="expert_right_img">
                <img src={insights} alt="insights" className="img-fluid" />
              </div>
              <div>
                <p className="expert_right_heading">
                  Get insights of resident reviews
                </p>
                <p>Know what locals say about dwarka expressway</p>
              </div>
            </div>
          </div>
          <div className="property_expert_img_box">
            <img src={sumit} alt="sumit sir" />
          </div>
          <div className="certified">
            <img src={certified} alt="certified icon" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyExpert;
