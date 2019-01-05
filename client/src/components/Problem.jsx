import React from 'react';

const ProblemModal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal-content">
            <div className="modal-header modal-header-navbar">
            <b>Report a problem</b> </div>
            <div className="modal-body">
            
          </div>
          
          <button onClick={handleClose}>close</button>
          
       </div>
        </section>
        </div>
    )    
  };
  

export default ProblemModal;