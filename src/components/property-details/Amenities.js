import React from "react";
import amenity from "../../assets/amenity-icon.svg";

const Amenities = () => {
  return (
    <div className="row">
      <h2 className="project_headings">M3M Crown Amenities</h2>
      <div className="col-6 col-md-4 facility">
        <img src={amenity} alt="amenity icon" />
        <p>Grade A Building</p>
      </div>
      <div className="col-6 col-md-4 facility">
        <img src={amenity} alt="amenity icon" />
        <p>Grade A Building</p>
      </div>
      <div className="col-6 col-md-4 facility">
        <img src={amenity} alt="amenity icon" />
        <p>Grade A Building</p>
      </div>
      <div className="col-6 col-md-4 facility">
        <img src={amenity} alt="amenity icon" />
        <p>Grade A Building</p>
      </div>
      <div className="col-6 col-md-4 facility">
        <img src={amenity} alt="amenity icon" />
        <p>Grade A Building</p>
      </div>
      <div className="col-6 col-md-4 facility">
        <img src={amenity} alt="amenity icon" />
        <p>Grade A Building</p>
      </div>
      <div className="col-6 col-md-4 facility">
        <img src={amenity} alt="amenity icon" />
        <p>Grade A Building</p>
      </div>
      <div className="col-6 col-md-4 facility">
        <img src={amenity} alt="amenity icon" />
        <p>Grade A Building</p>
      </div>
    </div>
  );
};

export default Amenities;
