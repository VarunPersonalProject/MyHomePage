import React from "react";
import ApiWrapper from "../../services/ApiWrapper";
import Clock from "../sub component/Clock";
import "./MainComponent.css";

export default function Middle() {
  const oDate = new Date(),
    _apiWrapper = new ApiWrapper(),
    nHour = oDate.getHours(),
    sUsername = _apiWrapper.getStorage("username");

  let sGreet;

  if (nHour < 12) sGreet = "Good Morning";
  else if (nHour >= 12 && nHour <= 17) sGreet = "Good Afternoon";
  else if (nHour >= 17 && nHour <= 24) sGreet = "Good Evening";
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
