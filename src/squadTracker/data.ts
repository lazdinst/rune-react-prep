import type { ISquadData } from "./types";

export const SQUADS: ISquadData = [
  {
    id: "SQ-101",
    name: "Riga Defense Unit",
    type: "infantry",
    status: "STANDBY",
    location: "Sector North",
    priority: 2,
    lastReport: "2025-11-14T13:00:00Z",
  },
  {
    id: "SQ-202",
    name: "SkyEye Recon-1",
    type: "drone",
    status: "DEPLOYED",
    location: "Border Ridge",
    priority: 1,
    lastReport: "2025-11-14T12:55:00Z",
  },
  {
    id: "SQ-303",
    name: "Ghost Recon Team",
    type: "recon",
    status: "RETURNING",
    location: "Daugava Corridor",
    priority: 3,
    lastReport: "2025-11-14T12:40:00Z",
  },
  {
    id: "SQ-404",
    name: "Echo Infantry Bravo",
    type: "infantry",
    status: "STANDBY",
    location: "Outpost Delta",
    priority: 4,
    lastReport: "2025-11-14T12:30:00Z",
  },
];
