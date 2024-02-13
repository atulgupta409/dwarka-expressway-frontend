import React from "react";

const Price = () => {
  return (
    <section className="pricing_table">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main_heading text-center white_text">
              <h2 className="best_project_heading">
                Ganga Realty Nandaka Price List
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered price_table">
                <thead>
                  <tr>
                    <th className="text-center">Type</th>
                    <th className="text-center">Total Area</th>
                    <th className="text-center">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>3 BHK</td>
                    <td>3050 Sq.ft</td>
                    <td>
                      <a href="tel:9999063322">Call Now: +91 9999063322</a>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>4 BHK</td>
                    <td>3850 Sq.ft</td>
                    <td>
                      <a href="tel:9999063322">Call Now: +91 9999063322</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-12">
            <ul className="price-list">
              <li>
                BHK - Bedroom, Hall and Kitchen, SQ/SR - Servant, ST/STD -
                Study, T- Toilet.
              </li>
              <li>Total Area includes carpet & exclusive areas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
