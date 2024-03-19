import React, { useRef, useState } from "react";
import "./ContactForm.css";
import { checkValidation } from "../../../utils/validate";
import mob from "../../../assets/mob-frame.png";
import approved from "../../../assets/approved-white.svg";

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);

  const submitFormHandler = () => {
    const message = checkValidation(
      name.current.value,
      email.current.value,
      phone.current.value
    );
    setErrorMessage(message);
  };

  return (
    <section className="agent-section main_container">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-md-6 property_expert_left">
            <h2 className="contact_heading">
              Connect us to buy property <br />
              at Dwarka Expressway
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-md-6">
                  <div className="input_box">
                    <input type="text" ref={name} placeholder="Name" />
                    <i class="fa fa-regular fa-user"></i>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input_box">
                    <input type="tel" ref={phone} placeholder="Phone" />
                    <i class="fa fa-solid fa-phone"></i>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input_box">
                    <input type="email" ref={email} placeholder="Email" />
                    <i class="fa fa-regular fa-envelope"></i>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <p className="error_message">{errorMessage}</p>
                  <button
                    className="site_btn"
                    type="submit"
                    onClick={submitFormHandler}
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 property_expert_right">
            <div className="d-flex align-item-center contact_right">
              <div className="contact_right_img">
                <img src={approved} alt="approved" className="img-fluid" />
              </div>
              <p className="contact_right_heading mb-0">Free Site-Visit</p>
            </div>
            <div className="d-flex align-item-center contact_right">
              <div className="contact_right_img">
                <img src={approved} alt="approved" className="img-fluid" />
              </div>
              <p className="contact_right_heading mb-0">Rera Approved</p>
            </div>
            <div className="d-flex align-item-center contact_right">
              <div className="contact_right_img">
                <img src={approved} alt="approved" className="img-fluid" />
              </div>
              <p className="contact_right_heading mb-0">Trusted Developers</p>
            </div>
            <div className="d-flex align-item-center contact_right">
              <div className="contact_right_img">
                <img src={approved} alt="approved" className="img-fluid" />
              </div>
              <p className="contact_right_heading mb-0">Special Price Offers</p>
            </div>
            <div className="d-flex align-item-center contact_right">
              <div className="contact_right_img">
                <img src={approved} alt="approved" className="img-fluid" />
              </div>
              <p className="contact_right_heading mb-0">Easy Payment Plan</p>
            </div>
          </div>
        </div>
        <div className="mob position-absolute">
          <img src={mob} alt="mob" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
