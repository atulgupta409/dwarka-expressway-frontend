import React from "react";
import buildingImg from "../../assets/elan.jpg";
import "./Card.css";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="card_box">
      <Link className="text-decoration-none">
        <div className="card_img">
          <img
            src={buildingImg}
            alt="property img"
            className="img-fluid property_img"
          />
        </div>
        <div className="card_body">
          <h4>M3M Crown</h4>
          <div className="property_location">
            <FaLocationDot className="location_icon" /> Sector 106, Gurugram
          </div>
          <p className="property_price">
            <span>₹ 3.50 Cr*</span> Onwards
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
