import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ApiWrapper from "./services/ApiWrapper";

const oRoot = document.getElementById("root"),
  _apiWrapper = new ApiWrapper(),
  username = _apiWrapper.getStorage("username") || "";

_apiWrapper.setLongLat();

if (!username) {
  let personName = prompt("Please enter your name", "");
  if ((personName || "").trim()) {
    _apiWrapper.setStorage("username", personName);
  } else {
    window.location.reload();
  }
}

ReactDOM.createRoot(oRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
