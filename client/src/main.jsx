import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "./contexts/LoaderContext";
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
