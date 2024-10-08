import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import ErrorBoundary from "./components/ErrorBoundary/index.tsx";
import Page from "./page.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Page />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
