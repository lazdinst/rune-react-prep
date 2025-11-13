import type { IQueuedActionStatus } from "./types";

export function getStatusColor(status: IQueuedActionStatus) {
  switch (status) {
    case "pending":
      return "cornflowerblue";
    case "cancelled":
      return "orange";
    case "error":
      return "red";
    case "stale":
      return "yellow";
    case "syncing":
      return "purple";
    case "success":
      return "green";
    default:
      return "#CCC";
  }
}
