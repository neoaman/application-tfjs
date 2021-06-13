import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./base/Homepage";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue, grey, orange, purple, white } from "@material-ui/core/colors";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Homepage />;
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
