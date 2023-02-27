import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ApiWrapper from "./services/ApiWrapper";

const oRoot = document.getElementById("root"),
  _apiWrapper = new ApiWrapper();

_apiWrapper.userConfiguration();

ReactDOM.createRoot(oRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
