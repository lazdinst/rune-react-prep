export interface INetworkContext {
  isOnline: boolean;
  toggleOnline: () => void;
}

export type QueueItemState = "PENDING" | "RETRYING" | "SUCCESS" | "FAILED";
export type ActionKind = "UPDATE_STATUS";

export interface QueueItem {
  id: string; // uuid
  kind: ActionKind;
  missionId: string;
  payload: { status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" };
  createdAt: string; // ISO
  attempts: number;
  state: QueueItemState;
}

export type QueueState = QueueItem[];

export interface IQueueContext {
  queue: QueueState;
  enqueue: (item: QueueItem) => void;
  markDone: (id: string) => void;
  markFailed: (id: string) => void;
}

export interface IMissionsContext {
  missions: IMissionData; // current mission list
  advance: (id: string) => void; // optimistic advance + enqueue
  setMissions: React.Dispatch<React.SetStateAction<IMissionData>>; // optional if you need direct state access
}

export type MissionStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
export type MissionType = "mission" | "resupply" | "intel";
export type MissionLastUpdateType = string;

export interface IMissionDataItem {
  id: string;
  type: MissionType;
  title: string;
  status: MissionStatus;
  location: string;
  priority: number;
  lastUpdate: MissionLastUpdateType;
}

export type IMissionData = IMissionDataItem[];
