import React, { useState, useEffect } from "react";

import { Card } from "./components/Card/Card";
import { Profile } from "./components/Profile/Profile";
import avatar from "./images/image-jeremy.png";
import "./App.css";
import { getTimeframes } from "./fakes/timeTracking";

function App() {
  const [activities, setActivities] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("weekly");

  useEffect(() => {
    setActivities(getTimeframes(selectedTimeframe))
  }, [selectedTimeframe]);

  const onTimeframeSelected = (timeframeName: string) => {
    setSelectedTimeframe(timeframeName.toLocaleLowerCase());
  };

  const getCardText = (previous: number): string => {
    const previousType =
      selectedTimeframe === "daily"
        ? "Yesterday"
        : selectedTimeframe === "weekly"
        ? "Last week"
        : "Last month";
    return `${previousType} - ${previous}hrs`;
  };

  return (
    <div className="app-root">
      <div className="main-section">
        <div className="profile-container">
          <Profile
            name="Jeremy Robson"
            avatarPath={avatar}
            tabs={["Daily", "Weekly", "Monthly"]}
            selectedTab={selectedTimeframe}
            onTimeframeSelected={onTimeframeSelected}
          />
        </div>
        <div className="cards-container">
          {activities.map((activity: any) => {
            return (
              <Card
                key={activity.title}
                title={activity.title}
                information={`${activity.current}hrs`}
                subtitle={getCardText(activity.previous)}
                variation={getCardVariationFromTitle(activity.title)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const getCardVariationFromTitle = (title: string): string => {
  const variation = "";
  switch (title) {
    case "Self Care":
      return "self-care";
    default:
      return title.toLocaleLowerCase();
  }
};

export default App;
