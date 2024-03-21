import React from "react";
import "./Footer.css";
import logoWhite from "../../assets/logo-white.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="footer_heading">Popular Searches</h5>
              <p>Best Projects on Dwarka Expressway</p>
              <p>New Launch Projects on Dwarka Expressway</p>
              <p>SCO Plots in Gurgaon</p>
              <p>Residential projects on Dwarka Expressway</p>
              <p>Commercial projects on Dwarka Expressway</p>
            </div>
            <div className="col-md-3">
              <h5 className="footer_heading">
                Buy Property on Dwarka Expressway
              </h5>
              <p>Buy Dwarka Expressway Affordable Housing Projects</p>
              <p>Buy Apartment on Dwarka Expressway</p>
              <p>Buy Plots on Dwarka Expressway</p>
              <p>Buy Shops on Dwarka Expressway</p>
              <p>Buy Villas on Dwarka Expressway</p>
            </div>
            <div className="col-md-3">
              <h5 className="footer_heading">
                Top Projects on Dwarka Expressway
              </h5>
              <p>Hero Homes</p>
              <p>Sobha City</p>
              <p>Emaar Palm Heights</p>
              <p>DLF Ultima</p>
              <p>Vatika Seven Elements</p>
            </div>
            <div className="col-md-2">
              <h5 className="footer_heading">Top Builders</h5>
              <p>Emaar India</p>
              <p>DLF Ltd.</p>
              <p>ATS Group</p>
              <p>Conscient Group</p>
              <p>Godrej Projects</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer_section">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4">
                <div className="about_footer">
                  <img
                    src={logoWhite}
                    className="img-fluid d-block"
                    alt="Dwarka Expressway"
                  />
                  <p className="text-white text-justify">
                    Dwarka Expressway is the upcoming residential hub. Because
                    of its strategic location, it is the top pick by residences
                    of Gurgaon & Delhi. A grade social & physical
                    infrastructure, Fast-Pased connectivity & Landscape greenery
                    all around make it an ideal 29.5 km long site to live
                    flawlessly in NCR.
                  </p>
                  <ul className="footer_sm">
                    <li style={{ marginLeft: "0" }}>
                      <a href="https://facebook.com/dwarkaExpresswayProjects/">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/dwarkaexpresswayproject/">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://in.pinterest.com/guptapromoters/dwarka-expressway-projects-gurgon/">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 middle_footer">
                <h5 className="text-white footer_heading mb-3">Top Projects</h5>
                <p>Hero Homes</p>
                <p>Sobha City</p>
                <p>Emaar Palm Heights</p>
                <p>DLF Ultima</p>
                <p>Vatika Seven Elements</p>
              </div>
              <div className="col-md-3 col-6 middle_footer">
                <h5 className="text-white footer_heading mb-3">Builders</h5>
                <p>Emaar India</p>
                <p>DLF Ltd.</p>
                <p>ATS Group</p>
                <p>Conscient Group</p>
                <p>Godrej Projects</p>
              </div>
              <div className="col-md-2 col-6 middle_footer">
                <h5 className="text-white footer_heading mb-3">Explore</h5>
                <p>Home</p>
                <p>New Launch Projects</p>
                <p>SCO Plots</p>
                <p>Best Projects</p>
                <p>All Projects</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="copyright_text text-center text-white">
                  Copyright © {year} Dwarka Expressway | All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
