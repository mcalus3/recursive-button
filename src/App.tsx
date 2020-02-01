import React from "react";
import "./App.css";
import RecursiveButton from "./RecursiveButton";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="button-container">
        <RecursiveButton first />
      </div>
    </div>
  );
};

export default App;
