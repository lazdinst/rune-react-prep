import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { default as AndurilApp } from "./anduril/App";
import { default as OfflineFirstQueue } from "./offline-first-queue/App";
import "./style.css";
import { NetworkProvider } from "./offline-first-queue/context";

const CURRENT_APP = [<AndurilApp />, <OfflineFirstQueue />];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NetworkProvider>{CURRENT_APP[1] || null}</NetworkProvider>
  </StrictMode>
);
