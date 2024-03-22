import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import authorized from "../../assets/authorized.svg";
import { checkValidation } from "../../utils/validate";
import thumbs from "../../assets/contacts-thumbs.gif";

const ProjectContact = () => {
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
    <div className="sticky_form">
      <div className="form_box">
        <div className="form_heading">
          <h3 className="req_box">
            Yes, I'm Interested <br />
            <span>in </span>
            <span className="contact_name">M3M Crown</span>
          </h3>
          {/* <span>
              <img src={thumbs} alt="thumbs" className="img-fluid" />
            </span> */}
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="input_box">
                <input type="text" ref={name} placeholder="Name" />
                <i class="fa fa-regular fa-user"></i>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <div className="input_box">
                <input type="tel" ref={phone} placeholder="Phone" />
                <i class="fa fa-solid fa-phone"></i>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="input_box">
                <input type="email" ref={email} placeholder="Email" />
                <i class="fa fa-regular fa-envelope"></i>
              </div>
            </div>
            <div className="form-check custom_form_check col-12 mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
                style={{ fontSize: "12px" }}
              >
                I agree to dwarka expressway projects{" "}
                <Link>privacy policy</Link>. Get an assured callback from sales
                expert.
              </label>
            </div>
          </div>
          <button
            className="modal_form_btn"
            type="submit"
            onClick={submitFormHandler}
          >
            Enquire Now
          </button>
        </form>
      </div>
      <div className="contact_form_footer">
        <img
          src={authorized}
          alt="authorized"
          className="img-fluid authorized"
        />
        <div className="ms-4">
          <p className="contact_footer_p">
            Dwarka Expressway Projects is an authorized channel partner.
          </p>
          <a href="tel:9999063322" className="contact_footer_link">
            <i
              class="fa fa-solid fa-phone-volume"
              style={{ marginRight: "6px" }}
            ></i>{" "}
            9999063322
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContact;
