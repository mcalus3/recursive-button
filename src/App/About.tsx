/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React from "react";
import "./About.css";

type Props = { open: boolean };

const About: React.FC<Props> = props => {
  return (
    <Box
      className="modal"
      sx={{
        display: open ? "block" : "none"
      }}
    >
      asdf
    </Box>
  );
};

export default About;
