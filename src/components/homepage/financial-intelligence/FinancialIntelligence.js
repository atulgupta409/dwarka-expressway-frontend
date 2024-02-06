import React from "react";
import "./FinancialIntelligence.css";

const FinancialIntelligence = () => {
  return (
    <section className="financial_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3>
              Financial intelligence to <br />
              buy property in Dwarka <br />
              Expressway
            </h3>

            <p>
              The investor community is seeing the area around Dwarka Expressway
              as a serious investment opportunity. Early investments have shown
              excellent growth; and with the Expressway heading towards
              completion, investor interest is very positive!
            </p>
          </div>

          <div className="col-md-6">
            <div className="table-responsive mt-2">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>Gurgaon’s 5 micro-markets</strong>
                    </td>

                    <td>
                      <strong>Average rate per sq ft (approx.)</strong>
                    </td>
                  </tr>

                  <tr>
                    <td>M G Road</td>

                    <td>₹ 20,000 - 25,000/-</td>
                  </tr>

                  <tr>
                    <td>Golf Course Road</td>

                    <td>₹ 25,000-80,000/-</td>
                  </tr>

                  <tr>
                    <td>Golf Course Extn Road</td>

                    <td>₹ 15,000 - 21,000/-</td>
                  </tr>

                  <tr>
                    <td>Sohna Road</td>

                    <td>₹ 10,000 - 15,000/-</td>
                  </tr>

                  <tr>
                    <td className="font-22 main-color">Dwarka Expressway</td>

                    <td className="font-20 main-color">₹ 9,500 - 22,000/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialIntelligence;
