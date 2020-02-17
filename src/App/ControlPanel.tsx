/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Flex, Link, Box, Button, Label, Radio } from "theme-ui";
import { useButtonState, useButtonDispatch } from "./recursiveButtonContext";
// @ts-ignore
import swal from "@sweetalert/with-react";
import About from "./About";

type Props = { setOpen: (value: boolean) => void };

const ControlPanel: React.FC<Props> = ({ setOpen }) => {
  const { count, mode } = useButtonState();
  const dispatch = useButtonDispatch();

  return (
    <Flex p={2} sx={{ flexDirection: "column" }}>
      <header
        sx={{
          mb: 2,
          border: "1px solid",
          borderColor: "primary",
          display: "flex",
          justifyContent: "center",
          variant: "styles.header"
        }}
      >
        <Link
          sx={{
            variant: "styles.navlink",
            p: 2,
            cursor: "pointer",
            textDecoration: "underline"
          }}
          onClick={() =>
            swal({
              buttons: {
                cancel: "Close"
              },
              content: <About />
            })
          }
        >
          about
        </Link>
      </header>
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
        <span
          sx={{
            ml: 2,
            display: "inline-block",
            width: "15ch"
          }}
        >
          Elements: {count}
        </span>
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
          Rampage (mouse only)
        </Label>
      </Flex>
    </Flex>
  );
};

export default ControlPanel;
