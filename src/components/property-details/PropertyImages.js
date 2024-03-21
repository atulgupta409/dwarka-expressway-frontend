import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const PropertyImages = () => {
  return (
    <div>
      <div className="heading_box">
        <div>
          <h2 className="project_headings">M3M Crown Image Gallery</h2>
        </div>
        <div>
          <Link className="view_all_btn" to={"/property-details/image-gallery"}>
            View All <FaArrowRightLong className="shake" />
          </Link>
        </div>
      </div>
      <div className="image_row">
        <div className="property_image_box mb-md-0 mb-3">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524736.jpeg"
            alt="property_image"
            className="property_image"
          />
        </div>
        <div className="property_image_box  mb-md-0 mb-3">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524741.jpg"
            alt="property_image"
            className="property_image"
          />
        </div>
        <div className="property_image_box mb-md-0 mb-3">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524746.jpg"
            alt="property_image"
            className="property_image"
          />
        </div>
      </div>
      <div className="text-end mt-3">
        <Link className="view_all_mob" to={"/property-details/image-gallery"}>
          View All <FaArrowRightLong className="shake" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyImages;
