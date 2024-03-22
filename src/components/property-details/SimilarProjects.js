import React from "react";
import Card from "../card/Card";

const SimilarProjects = () => {
  return (
    <div className="container main_container">
      <h2 className="project_headings">
        <span className="heading_span">Similar Projects </span> in Sector 111,
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

export default SimilarProjects;