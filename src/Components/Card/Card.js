import React from "react";

import CardImage from "../../static/card.jpg";

import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";

import "./Card.css";

const cardIcons = [
  {
    value: "3.0",
    name: "Bedroom",
    icon: <IoBedOutline className="card-icons mr-2" />,
  },
  {
    value: "2.0",
    name: "Bathroom",
    icon: <FaBath className="card-icons mr-2" />,
  },
  {
    value: "1600",
    name: "Area",
    icon: <BiArea className="card-icons mr-2" />,
  },
];

const Card = ({ details }) => {
  return (
    <div
      className="d-flex flex-column flex-lg-row card-links"
      data-bs-toggle="modal"
      data-bs-target="#Modal"
    >
      <div className="card-image">
        <img src={CardImage} alt="card" />
      </div>
      <div>
        <div className="btn border mb-2">{details.gender}</div>
        <h3 className="title m-0">{details.email}</h3>
        <div className="address text-muted mb-1">{details.nat}</div>
        <div className="card-icons-group">
          {cardIcons.map((item, index) => (
            <span key={index}>
              {item.icon}
              <span className="mr-3">
                <strong>{item.value}</strong> {item.name}
              </span>
            </span>
          ))}
        </div>
        <p className="mt-3">
          <strong>$16000</strong>
          <span className="text-muted"> / Monthly Rent</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
