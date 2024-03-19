import React from "react";
import Card from "../../card/Card";
import { Link } from "react-router-dom";
import propertyImg from "../../../assets/elan.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const ScoPlotsGurgaon = () => {
  return (
    <div className="fw_property_section">
      <div className="container">
        <div className="heading_box">
          <div>
            <h2 className="best_project_heading">
              <span className="heading_span">SCO Plots</span> in Gurgaon
            </h2>
          </div>
          <div>
            <Link className="view_all_btn">
              View All <FaArrowRightLong className="shake" />
            </Link>
          </div>
        </div>
        <div className="property_cards_row">
          <div className="row">
            <div className="col-md-4 mt30">
              <Link>
                <div className="big_property position-relative">
                  <img src={propertyImg} alt="property" className="img-fluid" />
                  <div className="property_overlay">
                    <h4>Godrej Arista</h4>
                    <p>Sector 79, Gurugram</p>
                    <p>
                      Starting <span>₹ 3.50 Cr*</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4 mt30">
                  <Link>
                    <div className="small_property position-relative">
                      <img
                        src={propertyImg}
                        alt="property"
                        className="img-fluid"
                      />
                      <div className="property_overlay">
                        <h4>Godrej Arista</h4>
                        <p>Sector 79, Gurugram</p>
                        <p>
                          Starting <span>₹ 3.50 Cr*</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt30">
                  <Link>
                    <div className="small_property position-relative">
                      <img
                        src={propertyImg}
                        alt="property"
                        className="img-fluid"
                      />
                      <div className="property_overlay">
                        <h4>Godrej Arista</h4>
                        <p>Sector 79, Gurugram</p>
                        <p>
                          Starting <span>₹ 3.50 Cr*</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt30">
                  <Link>
                    <div className="small_property position-relative">
                      <img
                        src={propertyImg}
                        alt="property"
                        className="img-fluid"
                      />
                      <div className="property_overlay">
                        <h4>Godrej Arista</h4>
                        <p>Sector 79, Gurugram</p>
                        <p>
                          Starting <span>₹ 3.50 Cr*</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt30">
                  <Link>
                    <div className="small_property position-relative">
                      <img
                        src={propertyImg}
                        alt="property"
                        className="img-fluid"
                      />
                      <div className="property_overlay">
                        <h4>Godrej Arista</h4>
                        <p>Sector 79, Gurugram</p>
                        <p>
                          Starting <span>₹ 3.50 Cr*</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt30">
                  <Link>
                    <div className="small_property position-relative">
                      <img
                        src={propertyImg}
                        alt="property"
                        className="img-fluid"
                      />
                      <div className="property_overlay">
                        <h4>Godrej Arista</h4>
                        <p>Sector 79, Gurugram</p>
                        <p>
                          Starting <span>₹ 3.50 Cr*</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt30">
                  <Link>
                    <div className="small_property position-relative">
                      <img
                        src={propertyImg}
                        alt="property"
                        className="img-fluid"
                      />
                      <div className="property_overlay">
                        <h4>Godrej Arista</h4>
                        <p>Sector 79, Gurugram</p>
                        <p>
                          Starting <span>₹ 3.50 Cr*</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row best_projects_row desk_hide d-flex d-md-none">
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
    </div>
  );
};

export default ScoPlotsGurgaon;
