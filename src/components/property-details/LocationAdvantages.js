import React from "react";
import leftbg from "../../assets/advantage-bg.png";
import projectImg from "../../assets/slider.jpg";
import { AiOutlineDownload } from "react-icons/ai";

const LocationAdvantages = () => {
  return (
    <section className="location_advantage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>M3M Crown Location Advantages</h3>
            <ul>
              <li>
                M3M Crown is situated in Sector 111 Gurgaon offering great
                connectivity between Nh-8 and Dwarka Expressway.
              </li>
              <li>
                Enjoy the proximity of cafés and restaurants such as Hyatt
                Place, the Oberoi, Leela Ambience, Radisson Blue and more.
              </li>
              <li>
                M3M Crown is in the vicinity of IGI Airport, Gurgaon railway
                station and more.
              </li>
              <li>
                The building project is close to adventure theme parks like
                jinga Lala, fun &food theme parks, etc.
              </li>
              <li>
                The building project is close to adventure theme parks like
                jinga Lala, fun &food theme parks, etc.
              </li>
            </ul>
          </div>
          <div className="col-md-6 position-relative">
            <button className="download_brochure">
              DOWNLOAD BROCHURE <AiOutlineDownload className="download_icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="leftbg">
        <img src={leftbg} alt="left bg" />
      </div>
      <div className="rightbg">
        <img src={projectImg} alt="project" />
        <div className="rightbg_layer"></div>
      </div>
    </section>
  );
};

export default LocationAdvantages;
