import React from "react";

const PropertyPlans = () => {
  return (
    <div>
      <h2 className="project_headings">M3M Master Plan</h2>
      <div className="master_plan mt20">
        <img
          src="https://www.dwarkaexpresswayprojects.in/ganga-realty-nandaka-sector-84/images/site-layout.png"
          data-mdb-img="https://www.dwarkaexpresswayprojects.in/ganga-realty-nandaka-sector-84/images/site-layout.png"
          alt="master plan"
          className="img-fluid"
        />
        <div className="view_floor_plan_img">
          <button
            type="button"
            className="btn view_master_btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            View Master Plan
          </button>
        </div>
        <div
          className="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  M3M Crown Master Plan
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
                  src="https://www.dwarkaexpresswayprojects.in/ganga-realty-nandaka-sector-84/images/site-layout.png"
                  alt="master plan"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPlans;
