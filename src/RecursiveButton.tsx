import React from "react";
import Box from "@material-ui/core/Box";

const RecursiveButton: React.FC = () => {
  const [clicked, setClicked] = React.useState(false);

  return clicked ? (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box style={{ display: "flex" }}>
        <RecursiveButton />
        <RecursiveButton />
        <RecursiveButton />
      </Box>
      <Box style={{ display: "flex" }}>
        <RecursiveButton />
        <Box>{".........."}</Box>
        <RecursiveButton />
      </Box>
      <Box style={{ display: "flex" }}>
        <RecursiveButton />
        <RecursiveButton />
        <RecursiveButton />
      </Box>
    </Box>
  ) : (
    <button onClick={() => setClicked(true)}>click</button>
  );
};

export default RecursiveButton;
