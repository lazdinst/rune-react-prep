export type SquadType = "infantry" | "drone" | "recon";
export type SquadStatus = "STANDBY" | "DEPLOYED" | "RETURNING";

export interface ISquad {
  id: string;
  name: string;
  type: SquadType;
  status: SquadStatus;
  location: string;
  priority: number;
  lastReport: string; // ISO string
}

export type ISquadData = ISquad[];
