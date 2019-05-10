import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";

import App from "./app";

import registerServiceWorker from "./registerServiceWorker";

// Global Theme
const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

registerServiceWorker();