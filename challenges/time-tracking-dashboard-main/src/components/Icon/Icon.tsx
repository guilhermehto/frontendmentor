import React from "react";

import "./Icon.css";

type IconProps = {
  type:
    | "work"
    | "play"
    | "study"
    | "exercise"
    | "social"
    | "self-care"
    | "ellipsis";
};

const Icon: React.FC<IconProps> = ({ type }) => {
  return <img src={`../../../images/icon-${type}.svg`} />;
};

export { Icon };
