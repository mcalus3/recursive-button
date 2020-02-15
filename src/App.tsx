import React, { useState } from "react";
import "./App.css";
import RecursiveButton from "./RecursiveButton";
import { useButtonState, useButtonDispatch } from "./recursiveButtonContext";
// @ts-ignore
import { Button, Flex, Label, Radio, Box } from "@theme-ui/components";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { count, mode } = useButtonState();
  const dispatch = useButtonDispatch();

  return (
    <Box className="app">
      <Box className="button-container">
        <RecursiveButton first clicked={open} setClicked={setOpen} />
      </Box>
      <Flex p={2} sx={{ flexDirection: "column" }}>
        <Box mb={2}>
          <Button
            variant="primary"
            onClick={() => {
              dispatch({ type: "addCount", payload: -count + 1 });
              setOpen(false);
            }}
          >
            reset
          </Button>
          <span style={{ color: "white" }}> Elements: {count}</span>
        </Box>
        <Flex sx={{ flexDirection: "column" }}>
          <Label>
            <Radio
              id="default"
              name="mode"
              value="default"
              defaultChecked
              checked={mode === "default"}
              onChange={() => {
                dispatch({ type: "changeState", payload: "default" });
              }}
            />
            Default mode
          </Label>
          <Label>
            <Radio
              id="undo"
              name="mode"
              value="undo"
              checked={mode === "undo"}
              onChange={() => {
                dispatch({ type: "changeState", payload: "undo" });
              }}
            />
            Undo
          </Label>
          <Label>
            <Radio
              type="radio"
              id="rampage"
              name="mode"
              value="rampage"
              checked={mode === "rampage"}
              onChange={() => {
                dispatch({ type: "changeState", payload: "rampage" });
              }}
            />
            Rampage
          </Label>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
