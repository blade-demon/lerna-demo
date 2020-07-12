import React from "react";
import logo from "./images/logo.svg";
import "./index.css";

export default function Loading() {
  return (
    <div className="Loading">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
