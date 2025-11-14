import type { MissionStatus } from "./types";

export const getTimeSinceLastUpdate = (lastUpdated: string): string => {
  if (!lastUpdated) return "";

  // convert string to a date
  const lastUpdatedTime = new Date(lastUpdated).getTime();
  // create a new instance of data at this momembnt in time
  const currentTime = new Date().getTime();

  // take the different between our lastupdate and currentTime (ms) then convert to seconds
  const diffInSeconds = Math.floor((currentTime - lastUpdatedTime) / 1000);

  // if seconds is < 60
  if (diffInSeconds < 60) {
    return `${diffInSeconds} ago`;
  }

  // Convert the time to mins, then take the modulo to get the remainder
  const diffInMins = Math.floor(diffInSeconds / 60);
  const diffSecondsRemainder = diffInSeconds % 60;

  // if mins is < 60,
  if (diffInMins < 60) {
    return `${diffInMins}m ${diffSecondsRemainder}s ago`;
  }

  const diffInHours = Math.floor(diffInMins / 60);
  const diffMinsRemainder = diffInMins % 60;

  if (diffInHours < 24) {
    return `${diffInHours}hrs ${diffMinsRemainder}m ${diffSecondsRemainder}s ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  const diffHoursRemainder = diffInHours % 24;

  return `${diffInDays}days ${diffHoursRemainder}hrs ${diffMinsRemainder}m ${diffSecondsRemainder}s ago`;
};

export const getNextMissionStatus = (current: MissionStatus): MissionStatus => {
  switch (current) {
    case "PENDING":
      return "IN_PROGRESS";
    case "IN_PROGRESS":
      return "COMPLETED";
    case "COMPLETED":
      return "COMPLETED";
    case "FAILED":
      return "FAILED";
    default:
      return current;
  }
};
