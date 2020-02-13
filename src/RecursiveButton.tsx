import React, { useEffect } from "react";
import "./RecursiveButton.css";
import { Howl } from "howler";
import { useCountDispatch } from "./countContext";

var sound = new Howl({
  src: ["pop.m4a"],
  volume: 0.5
});

type Props = {
  first?: boolean;
  clicked?: boolean;
  setClicked?: (value: boolean) => void;
};

const RecursiveButton: React.FC<Props> = ({
  first,
  clicked: clickedProp,
  setClicked: setClickedProp
}) => {
  const [clickedState, setClickedState] = React.useState(false);
  const dispatch = useCountDispatch();

  const open = clickedProp !== undefined ? clickedProp : clickedState;
  const onOpen =
    setClickedProp !== undefined ? setClickedProp : setClickedState;

  useEffect(() => {
    if (clickedProp !== undefined) {
      setClickedState(clickedProp);
    }
  }, [clickedProp]);

  return open ? (
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
        dispatch(7);
        onOpen(true);
        sound.play();
      }}
    >
      {first ? "Click me!" : null}
    </button>
  );
};

export default RecursiveButton;
