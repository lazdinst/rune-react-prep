import type { MissionStatus } from "./types";

export const ColumnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: "1rem",
  marginBottom: "1rem",
};

export const RowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  gap: "1rem",
};

export const getStatusIndicatorStyle = (
  status: MissionStatus
): React.CSSProperties => {
  const statusColor = getStatusColor(status);
  const style: React.CSSProperties = {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: statusColor,
  };
  return style;
};

export const getStatusColor = (status: MissionStatus) => {
  switch (status) {
    case "COMPLETED":
      return "lime";
    case "FAILED":
      return "red";
    case "IN_PROGRESS":
      return "orange";
    case "PENDING":
      return "blue";
    default:
      return "pink";
  }
};
