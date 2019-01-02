import React from 'react';

const Modal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
            <p>Hello</p>
            <h4>Send help.</h4>
            <h1>SOS</h1>
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };
  

export default Modal;