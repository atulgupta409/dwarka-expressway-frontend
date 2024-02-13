import React from "react";
import "./YoutubeEmbed.css";

const YoutubeEmbed = () => (
  <div className="container main_container">
    <h2 className="best_project_heading text-center">
      All you need to know about Dwarka Expressway Gurgaon
    </h2>
    <iframe
      width="100%"
      src={"https://www.youtube.com/embed/EmLy_E0VPgk"}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="youtube_video"
    />
  </div>
);

export default YoutubeEmbed;
