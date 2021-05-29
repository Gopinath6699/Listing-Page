import React, { useState } from "react";

import { toast } from "react-toastify";

import firebaseApp from "../../utils/config";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      firebaseApp.database().ref("contacts/").push({
        firstName,
        lastName,
        email,
        gender,
      });

      toast("Thanks for contact us ! we will get back to you soon.", {
        type: "success",
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setGender("");
    } catch (error) {
      console.error(error);
      toast(error, { type: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstname" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="dropdown mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          className="form-control form-select"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
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
