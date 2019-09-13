import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

// Global Theme
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#2E1159"
    },
    primary: { 500: '#FFFFFF'},
    secondary: {main: '#F4EFA8'},
    type: 'dark'
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

registerServiceWorker();
