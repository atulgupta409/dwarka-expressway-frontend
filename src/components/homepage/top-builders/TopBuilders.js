import React from "react";
import "./TopBuilders.css";
import dlfLogo from "../../../assets/dlf-logo.jpg";
import tataLogo from "../../../assets/tata-logo.jpg";
import emaarLogo from "../../../assets/emaar-india-logo.jpg";
import smartworldLogo from "../../../assets/smart-world.jpg";

const TopBuilders = () => {
  return (
    <div className="container main_container">
      <h2 className="best_project_heading">
        <span className="heading_span">Popular Builders</span> on Dwarka
        Expressway
      </h2>
      <div className="row best_projects_row">
        <div className="col-md-3 col-5 mt30">
          <div className="builder_card">
            <div className="builder_img">
              <img src={tataLogo} alt="builder-logo" />
            </div>
            <div className="builder_name">Tata Housing</div>
          </div>
        </div>
        <div className="col-md-3 col-5 mt30">
          <div className="builder_card">
            <div className="builder_img">
              <img src={dlfLogo} alt="builder-logo" />
            </div>
            <p className="builder_name">DLF Projects</p>
          </div>
        </div>
        <div className="col-md-3 col-5 mt30">
          <div className="builder_card">
            <div className="builder_img">
              <img src={emaarLogo} alt="builder-logo" />
            </div>
            <div className="builder_name">Emaar India</div>
          </div>
        </div>
        <div className="col-md-3 col-5 mt30">
          <div className="builder_card">
            <div className="builder_img">
              <img src={smartworldLogo} alt="builder-logo" />
            </div>
            <div className="builder_name">Smartworld</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBuilders;
