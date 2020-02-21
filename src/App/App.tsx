/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import RecursiveButton from "./RecursiveButton";
import { Flex } from "@theme-ui/components";
import ControlPanel from "./ControlPanel";
import RecursiveButtonTouchContainer from "./RecursiveButtonTouchContainer";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex sx={{ justifyContent: "center", flexWrap: "wrap" }}>
      <RecursiveButtonTouchContainer>
        <RecursiveButton first clicked={open} setClicked={setOpen} />
      </RecursiveButtonTouchContainer>
      <ControlPanel setOpen={setOpen} />
    </Flex>
  );
};

export default App;
