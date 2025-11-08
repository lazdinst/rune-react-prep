import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { default as AndurilApp } from "./anduril/App";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AndurilApp />
  </StrictMode>
);
