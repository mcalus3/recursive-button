import React from "react";
import { ThemeProvider } from "theme-ui";
// @ts-ignore
import { deep } from "@theme-ui/presets";
import { CountProvider } from "./recursiveButtonContext";

const theme = {
  ...deep,
  forms: {
    ...deep.forms
  },
  colors: {
    ...deep.colors,
    primary: "#816AAF",
    background: "#2E2442",
    gray: "#918B9D",
    text: "#E9E4F1"
  },
  buttons: {
    ...deep.buttons,
    primary: {
      color: "#E9E4F1",
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
