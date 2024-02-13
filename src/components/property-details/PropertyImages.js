import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const PropertyImages = () => {
  return (
    <section className="gallery_section main_container">
      <div className="container">
        <div className="heading_box">
          <div>
            <h2 className="best_project_heading">
              Ganga Realty Nandaka Image Gallery
            </h2>
          </div>
          <div>
            <Link
              className="view_all_btn"
              to={"/property-details/image-gallery"}
            >
              View All <FaArrowRightLong className="shake" />
            </Link>
          </div>
        </div>
        <div className="row image_row">
          <div className="col-md-4 col-8 mb-md-0 mb-3">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524736.jpeg"
              alt="property_image"
              className="property_image"
            />
          </div>
          <div className="col-md-4 col-8 mb-md-0 mb-3">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524741.jpg"
              alt="property_image"
              className="property_image"
            />
          </div>
          <div className="col-md-4 col-8 mb-md-0 mb-3">
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
    </section>
  );
};

export default PropertyImages;
