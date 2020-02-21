import React from "react";
import { useButtonState } from "./recursiveButtonContext";
import { Flex } from "theme-ui";

const RecursiveButtonTouchContainer: React.FC = props => {
  const { mode } = useButtonState();

  const onTouch =
    mode === "rampage"
      ? (e: React.TouchEvent) => {
          const onTouchMove = (moveEvent: any) => {
            var currentElementTouched = document.elementFromPoint(
              moveEvent.touches[0].pageX,
              moveEvent.touches[0].pageY
            );
            currentElementTouched?.dispatchEvent(
              new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true
              })
            );
          };
          const onTouchEnd = (endEvent: any) => {
            endEvent.target.removeEventListener("touchmove", onTouchMove);
            endEvent.target.removeEventListener("touchend", onTouchEnd);
          };
          e.target.addEventListener("touchmove", onTouchMove);
          e.target.addEventListener("touchend", onTouchEnd);
        }
      : undefined;
  return (
    <Flex
      sx={{
        justifyContent: "space-evenly",
        flexShrink: 0,
        width: "100vmin",
        height: "100vmin"
      }}
      onTouchStart={onTouch}
    >
      {props.children}
    </Flex>
  );
};

export default RecursiveButtonTouchContainer;
