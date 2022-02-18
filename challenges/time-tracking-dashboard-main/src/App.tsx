import React from "react";

import { Card } from "./components/Card/Card";
import { Profile } from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <div className="cards-container">
        <Profile
          name="Jeremy Robson"
          avatarPath="../../images/image-jeremy.png"
          tabs={["Daily", "Weekly", "Monthly"]}
        />

        <Card
          title="Work"
          information="32hrs"
          subtitle="Last Week - 36hrs"
          variation="work"
        />
        <Card
          title="Work"
          information="32hrs"
          subtitle="Last Week - 36hrs"
          variation="play"
        />
        <Card
          title="Work"
          information="32hrs"
          subtitle="Last Week - 36hrs"
          variation="study"
        />
        <Card
          title="Work"
          information="32hrs"
          subtitle="Last Week - 36hrs"
          variation="exercise"
        />
        <Card
          title="Work"
          information="32hrs"
          subtitle="Last Week - 36hrs"
          variation="social"
        />
        <Card
          title="Work"
          information="32hrs"
          subtitle="Last Week - 36hrs"
          variation="self-care"
        />
      </div>
    </div>
  );
}

export default App;
