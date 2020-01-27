import React from "react";
import "./RecursiveButton.css";

const RecursiveButton: React.FC = () => {
  const [clicked, setClicked] = React.useState(false);

  return clicked ? (
    <div className="f-column f-grow">
      <div className="d-flex f-grow">
        <RecursiveButton />
        <RecursiveButton />
        <RecursiveButton />
      </div>
      <div className="d-flex f-grow">
        <RecursiveButton />
        <div className="f-grow"></div>
        <RecursiveButton />
      </div>
      <div className="d-flex f-grow">
        <RecursiveButton />
        <RecursiveButton />
        <RecursiveButton />
      </div>
    </div>
  ) : (
    <button
      className="r-button f-grow"
      onClick={() => setClicked(true)}
    ></button>
  );
};

export default RecursiveButton;
