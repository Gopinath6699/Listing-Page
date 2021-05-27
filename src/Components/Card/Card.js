import React from 'react'

import CardImage from "../../static/card.jpg"

import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";

import "./Card.css"

const Card = () => {
  return (
    <div className="d-flex card-link ml-0">
      <div className="card-image">
        <img src={CardImage} alt="card" />
      </div>
      <div>
        <div className="btn border mb-2">Apartment</div>
        <h1 className="title m-0">Vintage</h1>
        <div className="address text-muted mb-1">
          in No.11-231 100 Young Street, Frankston, Victoria, 3199, AU
        </div>
        <div className="card-icons-group">
          <IoBedOutline className="card-icons mr-2" />
          <span className="mr-4">
            <strong>3.0</strong> Bedroom
          </span>
          <FaBath className="card-icons mr-2" />
          <span className="mr-4">
            <strong>2.0</strong> Bathroom
          </span>
          <BiArea className="card-icons mr-2" />
          <span>
            <strong>1600</strong> Area
          </span>
        </div>
        <p className="mt-3">
          <strong>$16000</strong>
          <span className="text-muted"> / Monthly Rent</span>
        </p>
      </div>
    </div>
  );
}

export default Card
