/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import RecursiveButton from "./RecursiveButton";
import { Flex } from "@theme-ui/components";
import ControlPanel from "./ControlPanel";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex sx={{ justifyContent: "center", flexWrap: "wrap" }}>
      <Flex
        sx={{
          justifyContent: "space-evenly",
          flexShrink: 0,
          width: "100vmin",
          height: "100vmin"
        }}
      >
        <RecursiveButton first clicked={open} setClicked={setOpen} />
      </Flex>
      <ControlPanel setOpen={setOpen} />
    </Flex>
  );
};

export default App;
