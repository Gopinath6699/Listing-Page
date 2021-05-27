import React from 'react'

import Logo from '../../static/logo512.png'
import { MdEmail } from "react-icons/md";

import "./Navbar.css"

const NavBar = () => {
  return (
    <header className="d-flex justify-content-center justify-content-md-between fixed-top py-3">
      <a href="/" title="Tenantcube Portal">
        <img
          src={Logo}
          alt="Logo"
          className="header-logo d-inline-block"
        />
        <h5 className="m-0 align-middle d-inline-block">
          Trafalgar Organization
        </h5>
      </a>
      <div className="m-0 d-none d-md-inline-block">
        <a href="/" className="btn">
          <MdEmail className="email-icon mr-2" />
          <span className="email-text py-2 font-weight-bold align-middle">Email Us</span>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
