import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";
import ErrorFallback from "./ui/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      onReset={() => window.location.replace("/")}
      FallbackComponent={ErrorFallback}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
