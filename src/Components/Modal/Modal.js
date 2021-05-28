import React from 'react'

import { MdClose } from "react-icons/md";

const Modal = () => {
  return (
    <div
      class="modal fade"
      id="Modal"
      tabindex="-1"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">
              Contact
            </h5>
            <button
              type="button"
              class="btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <MdClose />
            </button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn border">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal
