import React from "react";
import "./MainComponent.css";
import Link from "../sub component/Link";
import Temperature from "../sub component/Temperature";

export default function Upper() {
  return (
    <div className="Upper">
      <Link />
      <Temperature />
    </div>
  );
}
