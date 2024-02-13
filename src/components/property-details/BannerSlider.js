import React from "react";

const BannerSlider = () => {
  return (
    <section className="banner_slider">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.dwarkaexpresswayprojects.in/ganga-realty-nandaka-sector-84/images/slider/slider1.jpg"
              className="d-block w-100"
              alt="Welcome To Ganga Realty Nandaka"
            />
            <div className="carousel-caption">
              <h3>
                Welcome To <br />
                Ganga Realty Nandaka
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.dwarkaexpresswayprojects.in/ganga-realty-nandaka-sector-84/images/slider/slider2.jpg"
              className="d-block w-100"
              alt="Luxury 3 & 4 BHK Apartments"
            />
            <div className="carousel-caption">
              <h3>
                Luxury
                <br />3 & 4 BHK Apartments
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.dwarkaexpresswayprojects.in/ganga-realty-nandaka-sector-84/images/slider/slider3.jpg"
              className="d-block w-100"
              alt="Located in Sector 84 Gurgaon"
            />
            <div className="carousel-caption">
              <h3>
                Located in
                <br />
                Sector 84 Gurgaon
              </h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default BannerSlider;
