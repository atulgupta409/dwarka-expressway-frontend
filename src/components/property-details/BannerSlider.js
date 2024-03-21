import React from "react";
import slider from "../../assets/slider.jpg";
import approved from "../../assets/approved-icon.svg";

const BannerSlider = () => {
  return (
    <section className="banner_slider">
      <img src={slider} alt="slider" />
      <div className="slider_layer"></div>
      <div className="text_layer">
        <div className="container property_banner_container">
          <h1>M3M Crown</h1>
          <p className="property_location">Sector-111, Gurgaon</p>
          <div className="d-flex">
            <img src={approved} alt="approved" className="property_approve" />
            <p>
              Italian marble flooring rooms, spacious balconies with exotic
              views
            </p>
          </div>
          <div className="d-flex">
            <img src={approved} alt="approved" className="property_approve" />
            <p>
              Italian marble flooring rooms, spacious balconies with exotic
              views
            </p>
          </div>
          <div className="d-flex">
            <img src={approved} alt="approved" className="property_approve" />
            <p>
              Italian marble flooring rooms, spacious balconies with exotic
              views
            </p>
          </div>
          <div className="d-flex">
            <img src={approved} alt="approved" className="property_approve" />
            <p>
              Italian marble flooring rooms, spacious balconies with exotic
              views
            </p>
          </div>
          <div className="d-flex">
            <img src={approved} alt="approved" className="property_approve" />
            <p>
              Italian marble flooring rooms, spacious balconies with exotic
              views
            </p>
          </div>
          <button className="expert_btn" style={{ padding: "8px 30px" }}>
            Schedule Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
