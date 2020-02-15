import React from "react";
import { ThemeProvider } from "theme-ui";
// @ts-ignore
import { deep } from "@theme-ui/presets";
import { CountProvider } from "./recursiveButtonContext";

const theme = {
  ...deep,
  forms: {
    label: { color: "white" }
  },
  colors: {
    primary: "#816aaf",
    background: "#282c34"
  }
};

const Providers: React.FC = props => (
  <CountProvider>
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  </CountProvider>
);

export default Providers;
