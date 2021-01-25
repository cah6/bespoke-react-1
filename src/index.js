import "./css/index.scss";

// eslint-disable-next-line
import * as layouts from "./layouts/exports";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import bullets from "bespoke-bullets";
import classes from "bespoke-classes";
import nav from "bespoke-nav";
import progress from "bespoke-progress";

// ReactDOM.render(<App />, document.getElementById("root"));

const MOUNT_ELEMENT = document.getElementById("root");

const plugins = [bullets(), classes(), progress(), nav()];

ReactDOM.render(
  <App mountElement={MOUNT_ELEMENT} plugins={plugins} />,
  MOUNT_ELEMENT
);
