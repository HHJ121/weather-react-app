import React from "react";

import "./App.css";

import Weather from "./Weather";
import Coder from "./Coder";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-background">
          <Weather />
        </div>
        <Coder />
      </div>
    </div>
  );
}
