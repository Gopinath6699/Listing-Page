import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label for="firstname" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          required
        />
        <div className="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div className="mb-3">
        <label for="lastname" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          required
        />
        <div className="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div className="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div className="dropdown mb-3">
        <label for="validationCustom04" className="form-label">
          Gender
        </label>
        <select
          className="form-control form-select"
          id="validationCustom04"
          required
        >
          <option selected value="Male">
            Male
          </option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="d-flex mb-3 mt-4 justify-content-center">
        <button type="submit" className="btn border w-50">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
