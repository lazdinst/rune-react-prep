import type { IQueuedActions } from "./types";

export const data: IQueuedActions = [
  {
    id: "1a2b3c",
    type: "REPORT_FUEL",
    payload: {
      unitId: "Convoy-12A",
      message: "Fuel level at 42%. Resupply requested.",
    },
    createdAt: "2025-11-08T06:15:00Z",
    status: "pending",
  },
  {
    id: "4d5e6f",
    type: "UPDATE_STATUS",
    payload: {
      unitId: "Drone-3B",
      message: "Battery module replaced. Operational again.",
    },
    createdAt: "2025-11-08T06:18:00Z",
    status: "success",
  },
  {
    id: "7g8h9i",
    type: "ADD_NOTE",
    payload: {
      unitId: "FOB-Alpha",
      message: "Weather delay expected: visibility under 100 meters.",
    },
    createdAt: "2025-11-08T06:22:00Z",
    status: "syncing",
  },
  {
    id: "0j1k2l",
    type: "REPORT_FUEL",
    payload: {
      unitId: "Convoy-14E",
      message: "Fuel truck departed Depot East with 4,800L diesel.",
    },
    createdAt: "2025-11-08T06:25:00Z",
    status: "error",
    errorMessage: "Timeout — server unreachable.",
  },
  {
    id: "3m4n5o",
    type: "UPDATE_STATUS",
    payload: {
      unitId: "Helicopter-2",
      message: "Arrived at Base Lima with evac personnel.",
    },
    createdAt: "2025-11-08T06:30:00Z",
    status: "pending",
  },
  {
    id: "6p7q8r",
    type: "ADD_NOTE",
    payload: {
      unitId: "Depot-North",
      message: "Communications intermittent — switching to fallback channel.",
    },
    createdAt: "2025-11-08T06:35:00Z",
    status: "success",
  },
  {
    id: "9s0t1u",
    type: "REPORT_FUEL",
    payload: {
      unitId: "Convoy-9C",
      message: "Engine overheating. Reducing speed to 40 km/h.",
    },
    createdAt: "2025-11-08T06:38:00Z",
    status: "pending",
  },
  {
    id: "2v3w4x",
    type: "ADD_NOTE",
    payload: {
      unitId: "Command-Zulu",
      message: "New satellite uplink kit installed and online.",
    },
    createdAt: "2025-11-08T06:40:00Z",
    status: "success",
  },
  {
    id: "5y6z7a",
    type: "UPDATE_STATUS",
    payload: {
      unitId: "FOB-Delta",
      message: "Receiving partial supply shipment; missing one crate.",
    },
    createdAt: "2025-11-08T06:45:00Z",
    status: "error",
    errorMessage: "Network request failed.",
  },
  {
    id: "8b9c0d",
    type: "REPORT_FUEL",
    payload: {
      unitId: "Convoy-7D",
      message: "Fuel at 15%. Priority reroute requested.",
    },
    createdAt: "2025-11-08T06:50:00Z",
    status: "pending",
  },
];

