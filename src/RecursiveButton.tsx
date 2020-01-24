import React from "react";
import Box from "@material-ui/core/Box";

const RecursiveButton: React.FC = () => {
  const [clicked, setClicked] = React.useState(false);

  return clicked ? (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
      }}
    >
      <Box style={{ display: "flex", flexGrow: 1 }}>
        <RecursiveButton />
        <RecursiveButton />
        <RecursiveButton />
      </Box>
      <Box style={{ display: "flex", flexGrow: 1 }}>
        <RecursiveButton />
        <Box style={{ flexGrow: 1 }}></Box>
        <RecursiveButton />
      </Box>
      <Box style={{ display: "flex", flexGrow: 1 }}>
        <RecursiveButton />
        <RecursiveButton />
        <RecursiveButton />
      </Box>
    </Box>
  ) : (
    <button onClick={() => setClicked(true)} style={{ flexGrow: 1 }}></button>
  );
};

export default RecursiveButton;
