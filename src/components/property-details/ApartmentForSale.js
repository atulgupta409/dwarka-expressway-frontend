import React from "react";
import Card from "../card/Card";

const ApartmentForSale = () => {
  return (
    <div className="container main_container">
      <h2 className="project_headings">
        <span className="heading_span">Apartment for Sale</span> in M3M Crown
        Gurgaon
      </h2>
      <div className="row mt-4">
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ApartmentForSale;
