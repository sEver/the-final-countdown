import React from "react";
import Timer from "./Timer";
import Background from "./Background";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Background />
      <Timer until="2020-09-01T15:00:00"></Timer>
    </div>
  );
}

export default App;
