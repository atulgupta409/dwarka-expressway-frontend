import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ShimmerCard({ cards, mt }) {
  return (
    <div className={mt === "100px" ? "container mt100" : "container mt-4"}>
      <div className="row best_projects_row">
        {Array(cards)
          .fill(0)
          .map((item, index) => (
            <div key={index} className="col-sm-8 col-md-3">
              <div className="carousel-items">
                <div className="property_card_mob">
                  <div className="col-6 col-sm-12 img_box2 img_box_micro">
                    <Skeleton
                      className="wave-effect"
                      height={220}
                      width={293}
                      borderRadius={20}
                    />
                  </div>
                  <div className="card_body_skeleton col-md-6 col-sm-8">
                    <p className="card_title">
                      <Skeleton className="wave-effect" />
                    </p>
                    <div className="card_p homecard_p">
                      <p>
                        <Skeleton className="wave-effect" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShimmerCard;
