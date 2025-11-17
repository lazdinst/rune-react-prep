export type TheaterId = string;
export type MissionId = string;
export type FeedId = string;
export type AlertId = string;

export type MissionPriority = 1 | 2 | 3 | 4 | 5; // 5 = highest

export type FeedStatus = "ONLINE" | "DEGRADED" | "OFFLINE";
export type AlertSeverity = "INFO" | "WARNING" | "CRITICAL";

export interface ITheater {
  id: TheaterId;
  name: string;
  region: string; // e.g. "Europe", "Indo-Pacific"
  code: string; // e.g. "EU-BALTIC"
}

export type ITheaters = ITheater[];

export interface IMission {
  id: MissionId;
  name: string; // e.g. "Baltic Convoy Resupply 21"
  theaterId: TheaterId;
  priority: MissionPriority;
  status: "PLANNING" | "ACTIVE" | "PAUSED" | "COMPLETE";
  // ISO timestamps
  windowStart: string;
  windowEnd: string;
}

export type IMissions = IMission[];

export interface IEdgeFeed {
  id: FeedId;
  name: string; // "Convoy 21 – Telemetry"
  missionId: MissionId;
  theaterId: TheaterId;
  feedType: "TELEMETRY" | "POSITION" | "VIDEO" | "CHAT" | "COMMAND";
  status: FeedStatus;
  // Last heartbeat from the edge box
  lastHeartbeatAt: string;
  // Last meaningful data (could lag behind heartbeat)
  lastDataAt: string;
  // Error rate over last N minutes (0–1)
  errorRate: number;
  // Simulate queued actions waiting for reconnect
  queuedActions: number;
  // e.g. ["convoy", "armored", "high-latency-link"]
  tags: string[];
}

export type IEdgeFeeds = IEdgeFeed[];

export interface IAlert {
  id: AlertId;
  missionId: MissionId;
  feedId: FeedId;
  severity: AlertSeverity;
  type:
    | "HEARTBEAT_LOST"
    | "DATA_STALE"
    | "HIGH_ERROR_RATE"
    | "LINK_FLAP"
    | "CONFIG_DRIFT";
  message: string;
  createdAt: string; // ISO string
  acknowledged: boolean;
}

export type IAlerts = IAlert[];

export interface IFeedFilters {
  searchText: string;
  status: FeedStatus[]; // which ones are currently selected
  showStaleOnly: boolean; // derived concept from timestamps
  minMissionPriority: MissionPriority | null;
  theaterIds: TheaterId[]; // multi-select
}
