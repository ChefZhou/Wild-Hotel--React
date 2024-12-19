import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App.jsx";
import ErrorFallback from "./ui/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <StyleSheetManager
        shouldForwardProp={(prop) => isPropValid(prop) && prop !== "variation"}
      >
        <App />
      </StyleSheetManager>
    </ErrorBoundary>
  </React.StrictMode>
);
