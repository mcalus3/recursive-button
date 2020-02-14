import React, { useEffect } from "react";
import "./RecursiveButton.css";
import { Howl } from "howler";
import { useButtonDispatch, useButtonState } from "./recursiveButtonContext";

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
  const { mode } = useButtonState();
  const dispatch = useButtonDispatch();

  const onOpenedClick =
    mode === "undo"
      ? (e: React.MouseEvent) => {
          e.stopPropagation();
          setClickedState(false);
        }
      : () => {};
  const open = clickedProp !== undefined ? clickedProp : clickedState;
  const onOpen =
    mode === "undo"
      ? () => {}
      : setClickedProp !== undefined
      ? () => {
          dispatch({ type: "addCount", payload: 7 });
          setClickedProp(true);
          sound.play();
        }
      : () => {
          dispatch({ type: "addCount", payload: 7 });
          setClickedState(true);
          sound.play();
        };

  useEffect(() => {
    if (clickedProp !== undefined) {
      setClickedState(clickedProp);
    }
  }, [clickedProp]);

  return open ? (
    <div className="f-column f-grow" onClick={onOpenedClick}>
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
    <button className="r-button f-grow" onClick={onOpen}>
      {first ? "Click me!" : null}
    </button>
  );
};

export default RecursiveButton;
