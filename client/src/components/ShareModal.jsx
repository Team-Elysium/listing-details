import React from 'react';

const ShareModal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal-content">
            <div className="modal-header modal-header-navbar">
            <b>Share this Listing </b> </div>
            <div className="modal-body">
          <div className="email_dialog friend_email">
              <div htmlFor="from">Your Email</div>
              <input type="text" className="share-form-tab"></input> 
            <div className="friend_email">
              <div htmlFor="from">Friend's Email Address (separated by commas)</div>
              <input type="text" className="share-form-tab"></input> 
            </div>
            <div className="friend_email message">
              <div htmlFor="from">Message (optional)</div>
              <input type="text" className="share-form-tab"></input> 
            </div>
            <div className="friend_email copy">
              <input type="checkbox" name="copytomyself" id="copytomyself" value="true"></input>
              <label htmlFor="copytomyself">Send me a copy of this</label>
            </div>
            </div>
            
          </div>
          
          <button onClick={handleClose}>close</button>
          
          </div>
        </section>
      </div>
    );
  };
  

export default ShareModal;