import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="agent-section" id="contact-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <div className="expert_content">
              <img
                src="https://propularity.in/static/media/sumit-sir-contact-main.6a80238bc66799b9e9a3.png"
                className="img-fluid m-auto d-block profile_img"
                alt="sumit anand"
              />
              <h4>Sumit Anand Our Property Expert</h4>
              <p>20+ Years of Experience in Real Estate Investments</p>
              <p className="phone">
                <a href="tel:9999063322">
                  <span>Call now :</span> +91-9999063322
                </a>
              </p>
              <p className="phone">
                <a href="mailto: sumit.guptapromoters@gmail.com">
                  <span>Email :</span> sumit.guptapromoters@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="agent_form">
              <h5 className="ACthClr f24">
                Yes I am
                <span style={{ color: "#ff385c" }}>Interested!</span>
              </h5>
              <p>Know More About Dwarka Expressway</p>
              <div className="agent-form">
                <form
                  id="example3"
                  method="post"
                  onsubmit="sendMail3(); return false;"
                >
                  <input type="hidden" id="g-token" name="g-token" value="" />
                  <input
                    type="hidden"
                    name="propertyName"
                    value="dwarkaexpresswayprojects.in"
                  />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="namegp"
                          id="myname"
                          className="form-control rounded-0"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="emailgp"
                          id="myemail"
                          className="form-control rounded-0"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="phone"
                          name="mobilegp"
                          maxlength="10"
                          id="myphone"
                          className="form-control rounded-0"
                          placeholder="Mobile"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="property"
                          className="form-control form-select"
                          id="myproperty"
                          required
                        >
                          <option>Property Type</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Other/Any">Other/Any</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <button className="btn site_btn" type="submit">
                          <span>Send</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
