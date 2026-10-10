import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { gymConfig } from "./config/gymConfig.js";
import "./index.css";

// Apply theme colors from gymConfig.js to CSS variables
Object.entries(gymConfig.colors).forEach(([key, value]) => {
  document.documentElement.style.setProperty(`--color-${key}`, value);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
