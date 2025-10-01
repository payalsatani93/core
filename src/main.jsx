import React from "react";             // ✅ Import React
import ReactDOM from "react-dom/client";
import "./index.css";
import "tailwindcss";
import App from "./App.jsx";
import { createRoot } from 'react-dom/client';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


