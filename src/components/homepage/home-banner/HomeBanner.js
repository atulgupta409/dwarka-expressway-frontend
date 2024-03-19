import React, { useEffect, useRef, useState } from "react";
import "../Homepage.css";
import approved from "../../../assets/approved-icon.svg";
import Typewriter from "./Typewriter";

const HomeBanner = () => {
  const [isFeaturedSearch, setIsFeaturedSearch] = useState(false);
  const featuredSearchRef = useRef(null);

  const openFeaturedSearchBox = (event) => {
    event.stopPropagation();
    setIsFeaturedSearch(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        featuredSearchRef.current &&
        !featuredSearchRef.current.contains(event.target)
      ) {
        setIsFeaturedSearch(false);
      }
    };
    if (isFeaturedSearch) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isFeaturedSearch]);

  return (
    <div className="home_banner_main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner_content">
              <div>
                <span>
                  <img src={approved} alt="approved" /> Rera Approved
                </span>
                <span>
                  <img src={approved} alt="approved" /> Free Site-Visit
                </span>
                <span>
                  <img src={approved} alt="approved" /> Special Price Offers
                </span>
              </div>
              <h1>
                Explore Dwarka Expressway <br />
                Projects in Gurgaon
              </h1>
              <div
                className="search_box"
                onClick={(event) => openFeaturedSearchBox(event)}
              >
                <i className="fa fa-solid fa-magnifying-glass"></i>
                <input type="text" />
                {!isFeaturedSearch && <Typewriter />}
                {isFeaturedSearch && (
                  <div className="featured_search" ref={featuredSearchRef}>
                    <p>Trending Projects</p>
                    <div className="trending_projects_search">
                      <ul>
                        <li>Krisumi Waterfall Residences</li>
                        <li>M3M Crown</li>
                        <li>Smartworld One DXP</li>
                        <li>Whiteland The Aspen</li>
                        <li>Godrej Icon</li>
                        <li>DLF The Skycourt</li>
                        <li>Sobha City</li>
                        <li>Emaar Palm Heights</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
