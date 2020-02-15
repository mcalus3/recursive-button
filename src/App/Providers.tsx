import React from "react";
import { ThemeProvider } from "theme-ui";
// @ts-ignore
import { deep } from "@theme-ui/presets";
import { CountProvider } from "./recursiveButtonContext";

const theme = {
  ...deep,
  forms: {
    ...deep.forms,
    label: { color: "white" }
  },
  colors: {
    ...deep.colors,
    primary: "#816aaf",
    background: "#282c34",
    gray: "#808080"
  },
  buttons: {
    ...deep.buttons,
    primary: {
      backgroundColor: "primary",
      "&:hover": {
        backgroundColor: "secondary"
      },
      "&:active": {
        backgroundColor: "highlight"
      }
    }
  }
};

const Providers: React.FC = props => (
  <CountProvider>
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  </CountProvider>
);

export default Providers;
