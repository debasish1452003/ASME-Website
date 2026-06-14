import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import "./style/layout.css";
import "./style/homepage.css";
import "./style/team.css";
import "./style/achievements.css";
import "./style/professional.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const basename = (() => {
  if (process.env.NODE_ENV === "development") {
    return "/";
  }

  const publicUrl = process.env.PUBLIC_URL || "/";

  try {
    return new URL(publicUrl, window.location.origin).pathname || "/";
  } catch (error) {
    return "/";
  }
})();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={basename}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// "homepage": "https://debasish1452003.github.io/ASME-Website"
