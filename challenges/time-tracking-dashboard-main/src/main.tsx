import React from "react";
import ReactDOM from "react-dom";

import { worker } from "./mocks/browser";
import App from "./App";
import "./index.css";

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
