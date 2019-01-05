import React from "react";

const SaveModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-content">
          <div className="modal-header modal-header-navbar">
            <b>Register</b>{" "}
          </div>
          <div className="modal-body">
            <div className="register">
              Register for free to save this property and receive updates on
              price and status changes.
            </div>
            <div className="tabs-container">
              <div className="tabs first">Register</div>
              <div className="tabs second">Sign in</div>
            </div>
            <div className="field_container register_label">
              {/* <label htmlFor="to"></label>
              <input type="text" name="to" id="to"></input> */}
              <label>Email Address</label>
            </div>
            <div className="secondary_question blue_text">
              Real Estate Professional?
            </div>
            <div className="field_container register_label">
              <label>Password (at least 5 characters)</label>
            </div>
            <div className="terms_use">
              I accept StreetBreezy's{" "}
              <span className="blue_text">Terms of Use</span>
            </div>
          </div>
        </div>

        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default SaveModal;
