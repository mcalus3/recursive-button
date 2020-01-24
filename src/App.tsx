import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RecursiveButton from "./RecursiveButton";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RecursiveButton />
      </header>
    </div>
  );
};

export default App;
