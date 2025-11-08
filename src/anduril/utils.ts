import type { LatLngTuple } from "leaflet";
import type { IFeedStatus } from "./types";

export const getFeedOnlineStatus = (status: IFeedStatus) => {
  return status === "ONLINE";
};

export const getLastUpdated = (lastUpdate: string | Date) => {
  const lastUpdateInMs = new Date(lastUpdate).getTime();
  const currentTime = new Date().getTime();

  const differenceInMs = currentTime - lastUpdateInMs;
  const differenceInSeconds = Math.floor(differenceInMs / 1000);
  if (differenceInSeconds < 60) {
    return `Last Updated: ${differenceInSeconds}s ago`;
  }
  const differenceInMins = Math.floor(differenceInSeconds / 60);
  const remainingSeconds = differenceInSeconds % 60;

  if (differenceInMins < 60) {
    return `Last Updated: ${differenceInMins}m ${remainingSeconds}s ago`;
  }

  const differenceInHours = Math.floor(differenceInMins / 60);
  const remainingMins = differenceInMins % 60;

  if (differenceInHours < 24) {
    return `Last Updated: ${differenceInHours}hrs ${remainingMins}m ${remainingSeconds}s ago`;
  }

  const differenceInDays = Math.floor(differenceInHours / 24);
  const remainingHours = differenceInHours % 24;

  return `Last Updated: ${differenceInDays}days ${remainingHours}hrs ${remainingMins}m ${remainingSeconds}s ago`;
};

export const getLatLangFromAssetLocation = (latLng: string) => {
  return latLng
    .split(", ")
    .map((value) => parseFloat(value.trim())) as LatLngTuple;
};
