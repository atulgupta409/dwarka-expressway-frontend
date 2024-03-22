import React, { lazy } from "react";
const Card = lazy(() => import("../card/Card"));

const ScoPlotsGurgaon = () => {
  return (
    <>
      <div className="container top_container">
        <h1 className="best_project_heading mb-4">
          <span className="heading_span">SCO Plots</span> in Gurgaon
        </h1>
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

export default ScoPlotsGurgaon;
