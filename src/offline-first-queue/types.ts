export interface INetworkContextValue {
  isOnline: boolean;
  toggleOnline: () => void;
  setOnline: (value: boolean) => void;
}

export type IQueuedActionStatus =
  | "pending"
  | "syncing"
  | "success"
  | "error"
  | "cancelled"
  | "stale";

export type IQueuedActionType =
  | "REPORT_FUEL"
  | "UPDATE_STATUS"
  | "ADD_NOTE"
  | "REPORT_DAMAGE"
  | "REQUEST_SUPPORT"
  | "INVENTORY_UPDATE"
  | "MISSION_UPDATE"
  | "COMM_CHECK";

export interface IQueuedAction {
  id: string;
  type: IQueuedActionType;
  payload: {
    unitId: string;
    message: string;
  };
  createdAt: string;
  status: IQueuedActionStatus;
  errorMessage?: string;
}

export type IQueuedActions = IQueuedAction[];
