import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import Counters from "./components/counters";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

