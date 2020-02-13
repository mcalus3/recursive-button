import React from "react";
import "./RecursiveButton.css";
import { Howl } from "howler";

var sound = new Howl({
  src: ["pop.m4a"],
  volume: 0.5
});

type Props = { first?: boolean };

const RecursiveButton: React.FC<Props> = ({ first }) => {
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
      onClick={() => {
        setClicked(true);
        sound.play();
      }}
    >
      {first ? "Click me!" : null}
    </button>
  );
};

export default RecursiveButton;
