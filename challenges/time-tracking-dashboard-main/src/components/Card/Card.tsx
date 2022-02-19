import React from "react";

import { Icon } from "../Icon/Icon";
import "./Card.css";

type CardProps = {
  title?: string;
  information?: string;
  subtitle?: string;
  variation:
    | "work"
    | "play"
    | "study"
    | "exercise"
    | "social"
    | "self-care"
    | string;
};

const Card: React.FC<CardProps> = ({
  title,
  information,
  subtitle,
  variation = "work",
}) => {
  return (
    <div className="card-container">
      <div className={`background ${variation}`}>
        <Icon type={variation} />
      </div>
      <div className="card">
        <div className="title-section">
          <p className="title">{title}</p>
          <Icon type="ellipsis" />
        </div>
        <div className="information-section">
          <h1>{information}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
