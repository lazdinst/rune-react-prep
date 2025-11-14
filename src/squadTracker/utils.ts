export const getTimeSinceLastReport = (lastReport: string): string => {
  const lastReportTime = new Date(lastReport).getTime();
  const currentTime = new Date().getTime();

  const diffInSeconds = Math.floor((currentTime - lastReportTime) / 1000);
  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  }

  const diffInMins = Math.floor(diffInSeconds / 60);
  const diffInSecondsRemainder = diffInSeconds % 60;

  if (diffInMins < 60) {
    return `${diffInMins}m ${diffInSecondsRemainder}s`;
  }

  const diffInHours = Math.floor(diffInMins / 60);
  const diffInMinsRemainder = diffInMins % 60;

  if (diffInHours < 24) {
    return `${diffInHours}hrs ${diffInMinsRemainder}m ${diffInSecondsRemainder}s ago`;
  }

  return "";
};
