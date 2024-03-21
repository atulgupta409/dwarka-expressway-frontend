import React from "react";
import noImage from "../../assets/no-image.png";

const FloorPlan = () => {
  const floorPlanChange = () => {};

  return (
    <div>
      <h2 className="project_headings">M3M Floor Plan</h2>
      <div className="row">
        <div className="row floor_plan_scrollar">
          <button className="floor_plan_btn active" onClick={floorPlanChange}>
            3BHK floor plan
          </button>
          <button className="floor_plan_btn" onClick={floorPlanChange}>
            4BHK floor plan
          </button>
        </div>
        <div className="floor_configuration">
          <div className="floor_plan_card">
            <div className="floor_img">
              <img
                src={noImage}
                alt="floor plan"
                className="img-fluid clickable-image"
              />
              <>
                <div className="view_floor_plan_img">
                  <button
                    type="button"
                    className="btn view_img_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View Floor Plan
                  </button>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          3BHK floor plan
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <img
                          src={noImage}
                          alt="floor plan"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="card_body">
              <h5 className="card_title">3BHK</h5>
              <div className="row d-flex justify-content-between">
                <div className="col-6">
                  <p>Sale Price</p>
                  <p>
                    <a href="tel: 9999063322" className="project_details_link">
                      Call For Price
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="floor_plan_card">
            <div className="floor_img">
              <img
                src={noImage}
                alt="floor plan"
                className="img-fluid clickable-image"
              />
              <>
                <div className="view_floor_plan_img">
                  <button
                    type="button"
                    className="btn view_img_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View Floor Plan
                  </button>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          3BHK floor plan
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <img
                          src={noImage}
                          alt="floor plan"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="card_body">
              <h5 className="card_title">3BHK + Study</h5>
              <div className="row d-flex justify-content-between">
                <div className="col-6">
                  <p>Sale Price</p>
                  <p>
                    <a href="tel: 9999063322" className="project_details_link">
                      Call For Price
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
