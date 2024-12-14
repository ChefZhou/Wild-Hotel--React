import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={(prop) => isPropValid(prop) && prop !== "variation"}
    >
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
