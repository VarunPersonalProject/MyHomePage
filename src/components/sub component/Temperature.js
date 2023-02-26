import React, { useEffect, useState } from "react";
import "./SubComponent.css";
import ApiWrapper from "../../services/ApiWrapper";

export default function Temperature() {
  const [oData, setData] = useState({});

  useEffect(() => {
    const _apiWrapper = new ApiWrapper();
    _apiWrapper.temperatureLocation().then((oResponse) => {
      setData(oResponse);
    });
  }, []);

  return (
    <div className="Temperature">
      <span className="Temperature__Degree">{oData?.main?.temp}°</span>
      <span>{oData?.name}</span>
    </div>
  );
}
