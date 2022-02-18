import React from "react";

import "./Profile.css";

type ProfileProps = {
  name: string;
  avatarPath: string;
  tabs: string[];
};

const Profile: React.FC<ProfileProps> = ({ name, avatarPath, tabs }) => {
  return (
    <div className="profile">
      <div className="overlay">
        <img src={avatarPath} />
        <div className="name-section">
          <p>Report for</p>
          <h3>{name}</h3>
        </div>
      </div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <p key={tab} className={`tab ${index == 1 ? "is-active" : ""}`}>
            {tab}
          </p>
        ))}
      </div>
    </div>
  );
};

export { Profile };
