import React from 'react';

const ProblemModal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main bad-listing-modal">
          <div className="modal-content">
            <div className="modal-header modal-header-navbar">
            <b>Report a problem!</b> </div>
            <div className="modal-body bad-listing">
                <div className="bad-listing-line">This listing is no longer available on StreetEasy </div>
                <div className="bad-listing-line">This is a fraudulent listing</div>
                <div className="bad-listing-line">Incorrect Information/Photo</div>
          </div>
          
          <button onClick={handleClose}>close</button>
          
       </div>
        </section>
        </div>
    )    
  };
  

export default ProblemModal;