import React from "react";
import Card from "../card/Card";
import ContactForm from "../homepage/contact/ContactForm";

const BestProjects = () => {
  return (
    <>
      <div className="container top_container">
        <h1 className="text-center best_project_heading">
          Best Projects on Dwarka Expressway
        </h1>
        <div className="row">
          <div className="col-md-3 mt30">
            <Card />
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default BestProjects;
