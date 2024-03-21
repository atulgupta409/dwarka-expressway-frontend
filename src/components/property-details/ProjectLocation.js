import React from "react";
import location from "../../assets/project-location.png";

const ProjectLocation = () => {
  return (
    <div>
      <h2 className="project_headings">M3M Crown Google Location</h2>
      <img src={location} alt="location" className="locationImg" />
    </div>
  );
};

export default ProjectLocation;
