import React from "react";
import Timer from "./Timer";
import Background from "./Background";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Background />
      <Timer since="2020-10-14T15:27:00"></Timer>
    </div>
  );
}

export default App;
