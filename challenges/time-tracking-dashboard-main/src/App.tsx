import React, { useState, useEffect } from "react";

import { Card } from "./components/Card/Card";
import { Profile } from "./components/Profile/Profile";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState<
    "daily" | "weekly" | "monthly"
  >("weekly");

  useEffect(() => {
    const getSummary = async () => {
      const result = await fetch(`/summary?timeframe=${selectedTimeframe}`);
      const data = await result.json();
      setActivities(data);
    };

    getSummary();
  }, [selectedTimeframe]);

  const onTimeframeSelected = (timeframeName) => {
    setSelectedTimeframe(timeframeName.toLocaleLowerCase())
  }

  return (
    <div className="app-root">
      <div className="main-section">
        <div className="profile-container">
          <Profile
            name="Jeremy Robson"
            avatarPath="../../images/image-jeremy.png"
            tabs={["Daily", "Weekly", "Monthly"]}
            selectedTab={selectedTimeframe}
            onTimeframeSelected={onTimeframeSelected}
          />
        </div>
        <div className="cards-container">
          {activities.map((activity: any) => {
            return (
              <Card
                title={activity.title}
                information={`${activity.current}hrs`}
                subtitle={`Last Week - ${activity.previous}hrs`}
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
