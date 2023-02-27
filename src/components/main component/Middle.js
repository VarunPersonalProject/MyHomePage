import React from "react";
import ApiWrapper from "../../services/ApiWrapper";
import Clock from "../sub component/Clock";
import "./MainComponent.css";

export default function Middle() {
  const oDate = new Date(),
    _apiWrapper = new ApiWrapper(),
    nHour = oDate.getHours(),
    sUsername = _apiWrapper.getStorage("username");

  let sGreet = `Good ${
    nHour < 12
      ? "Morning"
      : nHour >= 12 && nHour <= 17
      ? "Afternoon"
      : "Evening"
  }`;

  return (
    <div>
      <Clock />
      <br />
      <span className="Middle_Username">
        {sGreet}, {sUsername}
      </span>
    </div>
  );
}
