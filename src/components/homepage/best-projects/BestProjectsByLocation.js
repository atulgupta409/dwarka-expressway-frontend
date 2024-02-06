import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../../card/Card";
import propertyImg from "../../../assets/elan.jpg";

const BestProjectsByLocation = () => {
  return (
    <>
      <div className="container main_container">
        <div className="heading_box">
          <div>
            <h2 className="best_project_heading">
              Best Projects on Dwarka Expressway
            </h2>
          </div>
          <div>
            <Link className="view_all_btn">
              View All {/* <FaArrowRight /> */}
              <FaArrowRightLong className="shake" />
            </Link>
          </div>
        </div>
        <p>
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
        <div className="row">
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
        </div>
      </div>
      <div className="fw_property_section">
        <div className="container">
          <div className="property_cards_row">
            <div className="heading_box">
              <div>
                <h2 className="best_project_heading">
                  Godrej Properties on Dwarka Expressway
                </h2>
              </div>
              <div>
                <Link className="view_all_btn">
                  View All <FaArrowRightLong className="shake" />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mt30">
                <Link>
                  <div className="big_property position-relative">
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
        </div>
      </div>
      <div className="container main_container">
        <div className="heading_box">
          <div>
            <h2 className="best_project_heading">
              Best Projects on Dwarka Expressway
            </h2>
          </div>
          <div>
            <Link className="view_all_btn">
              View All {/* <FaArrowRight /> */}
              <FaArrowRightLong className="shake" />
            </Link>
          </div>
        </div>
        <p>
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
        <div className="row">
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
          <div className="col-md-3 mt30">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestProjectsByLocation;
