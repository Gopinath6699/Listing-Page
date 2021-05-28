import React from 'react'

import { MdClose } from "react-icons/md";
import ContactForm from '../Form/ContactForm';

import "./Modal.css"

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="Modal"
      tabindex="-1"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{borderRadius: 10}}>
          <div className="modal-header">
            <h5 className="modal-title py-1" id="ModalLabel">
              Contact
            </h5>
            <button className="btn">
              <MdClose
                className="modal-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </button>
          </div>
          <div className="modal-body">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal
