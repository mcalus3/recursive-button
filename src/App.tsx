import React, { useState } from "react";
import "./App.css";
import RecursiveButton from "./RecursiveButton";
import {
  useButtonState,
  useButtonDispatch,
  useChangeButtonMode
} from "./recursiveButtonContext";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { count } = useButtonState();
  const dispatch = useButtonDispatch();
  const changeMode = useChangeButtonMode();

  return (
    <div className="app">
      <div className="button-container">
        <RecursiveButton first clicked={open} setClicked={setOpen} />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "addCount", payload: -count + 1 });
            setOpen(false);
          }}
        >
          reset
        </button>
        <input
          type="checkbox"
          id="undo"
          name="undo"
          value="true"
          onClick={changeMode}
        />
        <label htmlFor="undo" style={{ color: "white" }}>
          undo mode
        </label>
        <div style={{ color: "white" }}>Elements: {count}</div>
      </div>
    </div>
  );
};

export default App;
