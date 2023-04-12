import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { RandomPage, About, History } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const linkz = [
  { name: "Homepage", link: "/" },
  { name: "About", link: "/About" },
  { name: "RandomPage", link: "/RandomPage" },
];
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App linkz={linkz} />} />
      <Route path="/About" element={<About />}>
        <Route path="history" element={<History />} />
      </Route>
      <Route
        path="/RandomPage"
        element={<RandomPage minNumber={0} maxNumber={12} />}
      />
    </Routes>
  </BrowserRouter>
);
