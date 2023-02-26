import React, { useState } from "react";
import "./SubComponent.css";
export default function Clock() {
  const getLocalTime = (
      options = {
        hour: "2-digit",
        minute: "2-digit",
      }
    ) => new Date().toLocaleTimeString("en-US", options),
    [currentTime, setCurrentTime] = useState(getLocalTime()),
    setLocalTime = () => {
      setTimeout(
        () => {
          setCurrentTime(getLocalTime());
        },
        (60 -
          getLocalTime({
            second: "2-digit",
          })) *
          1000
      );
    };

  setLocalTime();

  return <div className="Clock">{currentTime}</div>;
}
