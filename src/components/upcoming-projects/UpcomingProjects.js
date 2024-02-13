import React, { lazy } from "react";

const ContactForm = lazy(() => import("../homepage/contact/ContactForm"));
const Card = lazy(() => import("../card/Card"));

const UpcomingProjects = () => {
  return (
    <>
      <div className="container top_container">
        <h1 className="text-center best_project_heading">
          Upcoming Projects on Dwarka Expressway
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
      <ContactForm />
    </>
  );
};

export default UpcomingProjects;
