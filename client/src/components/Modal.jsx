import React from 'react';

const Modal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal-content">
            <div className="modal-header modal-header-navbar">
            <b>Share this Listing </b> </div>
            <div className="modal-body">
          <div className="email_dialog">
            <div className="field_container">
              <div htmlFor="from">Your Email</div>
              <input type="text" name="from" id="from"></input> 
            </div>
            <div className="field_container">
              <label htmlFor="to"> Friend's Email Address (separated by commas)</label>
              <input type="text" name="to" id="to"></input>
            </div>
            <div className="field_container">
              <label htmlFor="to"> Message(optional)</label>
              <input type="text" name="to" id="to"></input>
            </div>
            <div className="field_container">
              <input type="text" name="to" id="to"></input>
              <input type="checkbox" name="copytomyself" id="copytomyself" value="true"></input>
              <label htmlFor="copytomyself">Send me a copy of this</label>
            </div>
            </div>
            
          </div>
          
          <button onClick={handleClose}>close</button>
          
          </div>
        </section>
        </div>
    )    
  };
  

export default Modal;