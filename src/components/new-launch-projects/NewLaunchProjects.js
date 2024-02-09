import React from "react";
import Card from "../card/Card";
import "./NewLaunchProjects.css";
import ContactForm from "../homepage/contact/ContactForm";

const NewLaunchProjects = () => {
  return (
    <>
      <div className="container top_container">
        <h2 className="text-center">
          New Launch Projects on Dwarka Expressway
        </h2>
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

export default NewLaunchProjects;
