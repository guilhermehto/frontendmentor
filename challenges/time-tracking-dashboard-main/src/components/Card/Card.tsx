import React, { ReactNode } from "react";

import { Icon } from "../Icon/Icon";
import { IconEllipsis } from "../Icon/IconEllipsis";
import { IconExercise } from "../Icon/IconExercise";
import { IconPlay } from "../Icon/IconPlay";
import { IconSelfCare } from "../Icon/IconSelfCare";
import { IconSocial } from "../Icon/IconSocial";
import { IconStudy } from "../Icon/IconStudy";
import { IconWork } from "../Icon/IconWork";
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
  const getIcon = (): ReactNode => {
    switch (variation) {
      case "work":
        return <IconWork />;
      case "play":
        return <IconPlay />;
      case "study":
        return <IconStudy />;
      case "exercise":
        return <IconExercise />;
      case "social":
        return <IconSocial />;
      case "self-care":
        return <IconSelfCare />;
    }
  };
  return (
    <div className="card-container">
      <div className={`background ${variation}`}>{getIcon()}</div>
      <div className="card">
        <div className="title-section">
          <p className="title">{title}</p>
          <IconEllipsis />
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
