import React from "react";

import iconMusic from "../../assets/icon-music.svg"
import "./PlanCard.css";

type PlanCardProps = {
  name: string,
  price: number,
  timeframe: "year",
}
const PlanCard = ({ name, price, timeframe }) => {
  return ( 
  <div className="plan-card">
    <img className="plan-card-icon" src={iconMusic} alt="musical note" />
    <div className="plan-description">
      <p className="name">{name}</p>
      <p className="pricing">{`$${price}/${timeframe}`}</p>
    </div>
    <a href="#">Change</a>
  </div>);
}

export { PlanCard }
