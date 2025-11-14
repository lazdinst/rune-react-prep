import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { default as AndurilApp } from "./anduril/App";
import { default as OfflineFirstQueue } from "./offline-first-queue/App";
import { default as Offline } from "./offline/App";
import { default as SquadTracker } from "./squadTracker/App";
import "./style.css";
import { NetworkProvider } from "./offline-first-queue/context";
import {
  NetworkProvider as NetworkProvider2,
  QueueProvider,
  MissionsProvider,
} from "./offline/providers";

const CURRENT_APP = [
  <AndurilApp />,
  <OfflineFirstQueue />,
  <Offline />,
  <SquadTracker />,
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NetworkProvider>
      <QueueProvider>
        <MissionsProvider>
          <NetworkProvider2>{CURRENT_APP[3] || null}</NetworkProvider2>
        </MissionsProvider>
      </QueueProvider>
    </NetworkProvider>
  </StrictMode>
);
