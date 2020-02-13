import React, { useState } from "react";
import "./App.css";
import RecursiveButton from "./RecursiveButton";
import { useCountState, useCountDispatch } from "./countContext";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const count = useCountState();
  const dispatch = useCountDispatch();

  return (
    <div className="app">
      <div className="button-container">
        <RecursiveButton first clicked={open} setClicked={setOpen} />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(-count + 1);
            setOpen(false);
          }}
        >
          reset
        </button>
        <div style={{ color: "white" }}>Elements: {count}</div>
      </div>
    </div>
  );
};

export default App;
